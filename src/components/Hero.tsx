import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, RotateCw, Eye, EyeOff } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onExploreMenu }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlaybackSpeed = () => {
    if (videoRef.current) {
      const nextRate = playbackRate === 1 ? 1.5 : playbackRate === 1.5 ? 2 : 1;
      videoRef.current.playbackRate = nextRate;
      setPlaybackRate(nextRate);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };
      video.addEventListener('ended', handleEnded);
      video.play().catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1B0F0A]">
      {/* Top Floating Controls: Minimalist 360° Turntable Badge & Focus Mode Toggle */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20 flex items-center gap-2">
        {/* Minimal 360 Indicator */}
        <div className="flex items-center gap-2 bg-[#120B07]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-[#FAF8F5]/90">
          <RotateCw className="w-3 h-3 text-[#B87B4C] animate-spin" style={{ animationDuration: '8s', animationTimingFunction: 'linear' }} />
          <span className="text-[11px] font-medium tracking-wider uppercase">360° View</span>
        </div>

        {/* Focus Mode (Cinematic View) Button */}
        <button
          onClick={() => setIsFocusMode(!isFocusMode)}
          aria-label={isFocusMode ? 'Tampilkan Teks' : 'Mode Sinematik'}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#120B07]/60 hover:bg-[#120B07]/80 border border-white/10 text-[#FAF8F5]/90 hover:text-white text-xs backdrop-blur-md transition-all cursor-pointer"
          title={isFocusMode ? 'Tampilkan Teks' : 'Mode Sinematik'}
        >
          {isFocusMode ? <Eye className="w-3 h-3 text-[#B87B4C]" /> : <EyeOff className="w-3 h-3" />}
          <span className="text-[11px] font-medium hidden sm:inline">
            {isFocusMode ? 'Tampilkan' : 'Fokus'}
          </span>
        </button>
      </div>

      {/* Video Background with Subtle Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover filter brightness-95 contrast-105 transition-all duration-700 transform-gpu"
          poster="/assets/iced_coffee_rotating.jpg"
        >
          <source src="/Iced_coffee_rotates_on_block_20260921121127.mp4" type="video/mp4" />
          <source src="Iced_coffee_rotates_on_block_20260921121127.mp4" type="video/mp4" />
          <source src="https://res.cloudinary.com/aoqpm2sj/video/upload/v1790037971/Iced_coffee_rotates_on_block_20260921121127.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Diagonal Moving Sunlight Shadow Beam (Subtle Warm Studio Light) */}
        <div 
          className="absolute inset-0 pointer-events-none animate-sunbeam opacity-25 mix-blend-soft-light"
          style={{
            background: 'linear-gradient(115deg, rgba(234, 219, 200, 0.5) 0%, rgba(184, 123, 76, 0.2) 30%, transparent 60%, rgba(18, 11, 7, 0.5) 100%)'
          }}
        />

        {/* Asymmetric Gradient: Dark on left for pristine text contrast, wide-open on right for coffee */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120B07]/80 via-[#120B07]/35 to-transparent pointer-events-none hidden lg:block" />
        
        {/* Mobile Balanced Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B07]/80 via-[#120B07]/20 to-[#120B07]/40 pointer-events-none lg:hidden" />

        {/* Bottom edge smooth blend */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#120B07] to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container: Clean Minimalist Editorial Layout */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 min-h-[85vh] flex flex-col justify-center transition-all duration-500 ${isFocusMode ? 'opacity-0 pointer-events-none translate-y-3' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-xl text-left">
          
          {/* Minimalist Micro Tag */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E7DFD5] text-[11px] font-medium tracking-widest uppercase mb-5"
          >
            <Sparkles className="w-3 h-3 text-[#B87B4C]" />
            <span>EST. 1990 · Cianjur Roastery</span>
          </div>

          {/* Minimalist Display Headline */}
          <h1
            id="hero-main-headline"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal tracking-tight leading-[1.12] mb-4"
          >
            Savor the <br />
            <span className="italic text-[#E7DFD5] font-light">Perfect Brew</span>
          </h1>

          {/* Concise Narrative */}
          <p
            id="hero-description"
            className="text-sm sm:text-base text-[#FAF8F5]/80 font-light leading-relaxed mb-8 max-w-md"
          >
            Racikan biji kopi pilihan yang disangrai dengan presisi dan diseduh segar setiap hari untuk menghadirkan rasa murni di setiap tegukan.
          </p>

          {/* Two Clean Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {/* Primary Order Button */}
            <button
              id="hero-order-now-btn"
              onClick={onOrderNow}
              className="px-6 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-white text-[#1C130E] font-medium text-xs tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Pesan Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Explore Menu Button */}
            <button
              id="hero-explore-menu-btn"
              onClick={onExploreMenu}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 font-medium text-xs tracking-wider uppercase backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              <span>Buku Menu</span>
            </button>
          </div>

          {/* Minimalist Metrics Strip */}
          <div
            id="hero-metrics"
            className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-[#E7DFD5]/80"
          >
            <div>
              <div className="text-base font-serif text-white font-medium">100%</div>
              <div className="text-[10px] uppercase tracking-wider text-[#E7DFD5]/60">Arabica</div>
            </div>
            <div className="w-px h-6 bg-white/15" />
            <div>
              <div className="text-base font-serif text-white font-medium">18 Jam</div>
              <div className="text-[10px] uppercase tracking-wider text-[#E7DFD5]/60">Cold Drip</div>
            </div>
            <div className="w-px h-6 bg-white/15" />
            <div>
              <div className="text-base font-serif text-white font-medium">Micro-Lot</div>
              <div className="text-[10px] uppercase tracking-wider text-[#E7DFD5]/60">Roastery</div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Controls Bar (Bottom-Right Minimalist Floating Pill) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-[#120B07]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-[#FAF8F5]/80 shadow-lg">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="p-1 hover:text-white transition-colors cursor-pointer"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>

        <div className="w-px h-2.5 bg-white/20" />

        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="p-1 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        </button>

        <div className="w-px h-2.5 bg-white/20" />

        {/* Speed */}
        <button
          onClick={togglePlaybackSpeed}
          aria-label="Speed"
          className="px-1 text-[10px] font-medium hover:text-white transition-colors cursor-pointer"
          title="Kecepatan Video"
        >
          {playbackRate}x
        </button>
      </div>
    </section>
  );
};
