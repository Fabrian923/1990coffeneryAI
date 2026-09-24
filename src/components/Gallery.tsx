import React, { useState } from 'react';
import { Camera, Eye, X, Sparkles, MapPin, Heart } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/coffeeData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const categories = ['All', 'Latte Art', 'Brew Bar', 'Atmosphere', 'Bakery'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#FAF8F5] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A7568] block mb-2">
              Galeri Foto
            </span>
            <h2
              id="gallery-section-title"
              className="text-3xl sm:text-4xl font-serif text-[#1C130E] font-normal tracking-tight"
            >
              Suasana <span className="italic font-light text-[#B87B4C]">Kedai</span>
            </h2>
            <p className="text-sm text-[#6E5343] font-light mt-1.5 max-w-lg">
              Potret sudut kedai, presisi barista saat menyeduh, dan momen hangat berkunjung di Cianjur.
            </p>
          </div>

          {/* Minimalist Segmented Category Filter */}
          <div className="flex p-1 bg-[#F2EDE6] rounded-full border border-[#E7DFD5] gap-1 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1C130E] text-white shadow-sm'
                    : 'text-[#6E5343] hover:text-[#1C130E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Minimalist Card Layout Grid */}
        <div
          id="gallery-card-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredItems.map((item) => {
            const isLiked = likedIds.has(item.id);

            return (
              <div
                key={item.id}
                id={`gallery-card-${item.id}`}
                onClick={() => setActiveItem(item)}
                className="group bg-white rounded-xl overflow-hidden border border-[#E7DFD5] hover:border-[#B87B4C]/50 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col"
              >
                {/* Image Container with zoom & overlays */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1C130E]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Eye className="w-3 h-3" /> Lihat Foto
                    </span>
                  </div>

                  {/* Category badge */}
                  <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-[#1C130E] text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">
                    {item.category}
                  </span>

                  {/* Like button */}
                  <button
                    onClick={(e) => toggleLike(e, item.id)}
                    aria-label="Like coffee moment"
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-full backdrop-blur-sm transition-colors ${
                      isLiked
                        ? 'bg-[#B87B4C] text-white'
                        : 'bg-black/30 text-white hover:bg-black/50'
                    }`}
                  >
                    <Heart className={`w-3 h-3 ${isLiked ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base text-[#1C130E] font-medium group-hover:text-[#B87B4C] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6E5343] font-light leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#F2EDE6] flex items-center justify-between text-[11px] text-[#8A7568]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#B87B4C]" /> 1990 coffeenery Cianjur
                    </span>
                    <span className="text-[#1C130E] font-medium group-hover:text-[#B87B4C] transition-colors">
                      Perbesar &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cafe Atmosphere Banner Under Gallery */}
        <div
          id="atmosphere-bar-banner"
          className="mt-12 rounded-xl bg-[#1C130E] text-[#FAF8F5] p-6 sm:p-8 relative overflow-hidden border border-[#32231A]"
        >
          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B87B4C] block mb-2">
              Diseduh Sepenuh Hati
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal mb-3 leading-snug">
              Setiap cangkir menyajikan kisah kesabaran, dedikasi, dan kenikmatan rasa.
            </h3>
            <p className="text-[#FAF8F5]/75 text-xs sm:text-sm font-light leading-relaxed mb-5">
              Singgah sejenak untuk menikmati aroma biji kopi yang baru disangrai dan biarkan barista kami meracik momen santai terbaik untuk Anda.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#FAF8F5]/90">
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10 text-[11px]">
                Wi-Fi Cepat & Meja Luas
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10 text-[11px]">
                Area Semi-Outdoor Sejuk
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10 text-[11px]">
                Suasana Hangat & Bersahabat
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Gallery Photo View */}
      {activeItem && (
        <div
          id="gallery-lightbox-modal"
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-[#120B07]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl overflow-hidden max-w-2xl w-full border border-[#E7DFD5] shadow-2xl relative"
          >
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Tutup foto"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="max-h-[55vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover max-h-[55vh]"
              />
            </div>

            <div className="p-5">
              <div className="inline-block text-[10px] font-medium uppercase tracking-wider text-[#8A7568] bg-[#F4EFEA] px-2 py-0.5 rounded mb-2">
                {activeItem.category}
              </div>
              <h3 className="font-serif text-xl text-[#1C130E] font-medium mb-1.5">
                {activeItem.title}
              </h3>
              <p className="text-xs text-[#6E5343] font-light leading-relaxed mb-3">
                {activeItem.subtitle} — Diramu di 1990 coffeenery Cianjur dengan standar ekstraksi terukur untuk cita rasa optimal.
              </p>
              <div className="flex justify-between items-center text-[11px] text-[#8A7568] pt-3 border-t border-[#F2EDE6]">
                <span>1990 coffeenery Cianjur</span>
                <span className="font-mono">#1990coffeenery</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
