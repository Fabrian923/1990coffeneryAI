import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Navigation, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = "Jl. K.H. Hasyim Ashari No.65, Solokpandan, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43214";
  const googleMapsUrl = "https://www.google.com/maps/place/1990+coffeenery/@-6.8195224,107.1409222,17z";
  const whatsappUrl = "https://wa.me/6281999571990?text=Halo%201990%20coffeenery,%20saya%20ingin%20memesan";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {});
  };

  return (
    <section id="location" className="py-20 sm:py-24 bg-[#F7F3EE] relative border-t border-[#E7DFD5]/80 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A7568] block mb-2">
            Kunjungi Kedai
          </span>
          <h2
            id="location-section-title"
            className="text-3xl sm:text-4xl font-serif text-[#1C130E] font-normal tracking-tight"
          >
            Lokasi & <span className="italic font-light text-[#B87B4C]">Kontak</span>
          </h2>
          <p className="text-sm text-[#6E5343] leading-relaxed font-light mt-2.5">
            Temukan kenyamanan, seduhan kopi segar, dan keramahan barista kami di jantung Solokpandan, Cianjur.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & CTA Buttons (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Info Cards Stack */}
            <div className="space-y-3.5">
              
              {/* Alamat Lengkap Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E7DFD5] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E7DFD5] text-[#1C130E] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#B87B4C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-[#8A7568] mb-0.5">
                      Alamat Kedai
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#1C130E] leading-relaxed">
                      {fullAddress}
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#8A7568] hover:text-[#1C130E] font-medium transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-[#3A5D45]" />
                          <span className="text-[#3A5D45]">Alamat berhasil disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Salin Alamat</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Jam Operasional Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E7DFD5] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E7DFD5] text-[#1C130E] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#B87B4C]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-[#8A7568] mb-0.5">
                      Jam Buka
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#1C130E]">
                      Setiap Hari (Senin – Minggu)
                    </div>
                    <div className="text-sm font-serif text-[#B87B4C] font-semibold mt-0.5">
                      08.00 – 21.00 WIB
                    </div>
                  </div>
                </div>
              </div>

              {/* Telepon & WhatsApp Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E7DFD5] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E7DFD5] text-[#1C130E] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-[#8A7568] mb-0.5">
                      WhatsApp Pemesanan
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-[#1C130E] hover:text-[#25D366] transition-colors"
                    >
                      +62 819-9957-1990
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E7DFD5] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E7DFD5] text-[#1C130E] flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-[#8A7568] mb-0.5">
                      Media Sosial
                    </div>
                    <a
                      href="https://instagram.com/1990coffeenery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-[#1C130E] hover:text-[#E1306C] transition-colors flex items-center gap-1"
                    >
                      <span>@1990coffeenery</span>
                      <ExternalLink className="w-3 h-3 text-[#8A7568]" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                id="btn-get-directions"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 rounded-full bg-[#1C130E] hover:bg-[#32231A] text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Petunjuk Arah</span>
              </a>

              <a
                id="btn-order-whatsapp-main"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1C130E] border border-[#E7DFD5] font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-full min-h-[380px] rounded-xl overflow-hidden border border-[#E7DFD5] bg-white">
              
              {/* Floating Maps Overlay Badge */}
              <div className="absolute top-3.5 left-3.5 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#E7DFD5] shadow-sm flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B87B4C]" />
                <div>
                  <div className="text-xs font-serif font-medium text-[#1C130E]">1990 coffeenery</div>
                  <div className="text-[10px] text-[#8A7568]">Solokpandan, Cianjur</div>
                </div>
              </div>

              {/* Open in Google Maps Quick Floating Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3.5 right-3.5 z-10 bg-[#1C130E]/80 hover:bg-[#1C130E] text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5 shadow transition-colors"
              >
                <ExternalLink className="w-3 h-3 text-[#B87B4C]" />
                <span className="text-[10px] font-medium hidden sm:inline">Buka Peta</span>
              </a>

              {/* Interactive Google Maps Iframe */}
              <iframe
                title="Peta Lokasi 1990 Coffeenery Cianjur"
                src="https://maps.google.com/maps?q=1990+coffeenery+Jl.+K.H.+Hasyim+Ashari+No.65+Solokpandan+Cianjur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%]"
              />

              {/* Bottom Address Ribbon on Map */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 bg-[#1C130E]/90 backdrop-blur-sm text-white px-3.5 py-2 rounded-lg border border-white/10 flex items-center justify-between gap-3 text-xs">
                <span className="truncate text-[#FAF8F5]/90 text-[11px]">
                  Jl. K.H. Hasyim Ashari No.65, Solokpandan, Cianjur
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[#B87B4C] hover:text-white font-medium flex items-center gap-1 text-[11px]"
                >
                  <span>Arah</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
