import React, { useState } from 'react';
import { Coffee, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#140C08] text-[#FAF8F5] pt-16 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5 mb-3 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-[#FAF8F5] flex items-center justify-center">
                <Coffee className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight text-white font-medium">
                  1990 <span className="italic font-light text-[#B87B4C]">coffeenery</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8A7568] -mt-0.5">
                  Cianjur, Jawa Barat
                </span>
              </div>
            </a>

            <p className="text-xs text-[#FAF8F5]/70 font-light leading-relaxed mb-5 max-w-sm">
              Menghadirkan racikan kopi berkualitas dan suasana kedai yang hangat di Cianjur sejak awal berdiri.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/1990coffeenery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @1990coffeenery"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#FAF8F5]/80 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/6281999571990?text=Halo%201990%20coffeenery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#FAF8F5]/80 hover:text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.google.com/maps/place/1990+coffeenery/@-6.8195224,107.1409222,17z"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#FAF8F5]/80 hover:text-white flex items-center justify-center transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Jam Operasional (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Jam Buka
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/75 font-light">
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Senin – Jumat</span>
                <span className="font-mono text-[#B87B4C]">08.00 – 21.00</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Sabtu – Minggu</span>
                <span className="font-mono text-[#B87B4C]">08.00 – 21.00</span>
              </li>
              <li className="pt-1 text-[11px] text-[#8A7568]">
                Buka setiap hari untuk dine-in & takeaway
              </li>
            </ul>
          </div>

          {/* Col 3: Lokasi & Kontak (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Lokasi & Kontak
            </h4>
            <div className="space-y-2 text-xs text-[#FAF8F5]/75 font-light leading-relaxed">
              <p>
                Jl. K.H. Hasyim Ashari No.65, Solokpandan, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43214
              </p>
              <div className="pt-1 space-y-1">
                <a
                  href="https://wa.me/6281999571990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FAF8F5]/90 hover:text-white transition-colors block"
                >
                  WA: +62 819-9957-1990
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Berlangganan / Promo (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
              Kabar Kedai
            </h4>
            <p className="text-[11px] text-[#FAF8F5]/60 font-light mb-3 leading-relaxed">
              Dapatkan info promo spesial dan racikan biji kopi musiman.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-3 pr-9 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B87B4C] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Kirim"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#B87B4C] hover:bg-[#a66a3d] text-white rounded-md flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#8BA888] flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Terima kasih telah bergabung!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8A7568] font-light">
          <div>
            &copy; 2026 <strong>1990 coffeenery</strong> Cianjur. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#facilities" className="hover:text-white transition-colors">Fasilitas</a>
            <a href="#location" className="hover:text-white transition-colors">Lokasi</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
