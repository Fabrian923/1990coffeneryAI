import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Leaf, Clock, ArrowRight, Tag } from 'lucide-react';

interface WhyChooseUsProps {
  onClaimDeal: () => void;
  onExploreStory: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onClaimDeal, onExploreStory }) => {
  return (
    <section id="story" className="py-20 sm:py-24 bg-[#1C130E] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Layout (Brand on Left, Promo & Feature on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Description & Heritage */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B87B4C] block mb-3">
              Dedikasi Sejak 1990
            </span>

            <h2
              id="why-choose-us-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F5] font-normal tracking-tight leading-tight mb-4"
            >
              Mengapa Memilih <br />
              <span className="italic font-light text-[#E7DFD5]">1990 coffeenery</span>
            </h2>

            <p className="text-[#FAF8F5]/80 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-lg">
              Berawal dari pemanggang kopi sederhana di Cianjur dengan komitmen terhadap keaslian rasa. Barista kami menyangrai dalam micro-lot 12 kilogram guna merayakan keunikan setiap hasil panen lokal.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5]/10 text-[#B87B4C] flex items-center justify-center mb-3">
                  <Leaf className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-medium text-white">Direct Trade</h4>
                <p className="text-xs text-[#FAF8F5]/70 mt-1 font-light leading-relaxed">
                  Bermitra langsung dengan petani kopi lokal Cianjur & Jawa Barat dengan harga yang adil.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5]/10 text-[#B87B4C] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-medium text-white">Fresh Roast</h4>
                <p className="text-xs text-[#FAF8F5]/70 mt-1 font-light leading-relaxed">
                  Disangrai berkala setiap pekan untuk menjaga aroma segar dan crema terbaik.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5]/10 text-[#B87B4C] flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-medium text-white">Cold Drip 18 Jam</h4>
                <p className="text-xs text-[#FAF8F5]/70 mt-1 font-light leading-relaxed">
                  Ekstraksi tetes lambat menghasilkan seduhan halus dengan kadar asam rendah.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5]/10 text-[#B87B4C] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-medium text-white">Ramah Lingkungan</h4>
                <p className="text-xs text-[#FAF8F5]/70 mt-1 font-light leading-relaxed">
                  Komitmen menggunakan kemasan ramah lingkungan dan pengurangan limbah plastik.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div>
              <button
                id="why-choose-us-cta"
                onClick={onExploreStory}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1C130E] font-medium text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>Kisah Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Feature Image + Morning Promotional Deal Card */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            {/* Feature Image with Clean Frame */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
                alt="Barista meracik kopi di 1990 coffeenery"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#B87B4C] font-semibold">Specialty Roastery</span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-medium">Single-Origin Arabica & House Blend</h3>
                </div>
                <div className="bg-[#120B07]/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] text-[#FAF8F5] border border-white/15">
                  Q-Grader 94+
                </div>
              </div>
            </div>

            {/* Special Promotional Offer Box */}
            <div
              id="promo-morning-deal-card"
              className="bg-[#FAF8F5] text-[#1C130E] rounded-xl p-5 sm:p-6 border border-[#E7DFD5] relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#1C130E] bg-[#EFEAE2] px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3 text-[#B87B4C]" />
                    <span>Penawaran Pagi</span>
                  </div>
                  <span className="text-[11px] text-[#8A7568] flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#B87B4C]" /> Setiap Hari 07.00 – 10.00 WIB
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-serif text-[#1C130E] tracking-tight mb-1.5">
                  Diskon 20% <span className="text-[#8A7568] font-sans text-base font-light">Semua Seduhan Pagi</span>
                </div>

                <p className="text-xs text-[#6E5343] mb-4 leading-relaxed font-light">
                  Awali pagi Anda dengan secangkir espresso atau pour-over segar ditemani pastry hangat untuk menyambut hari.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    id="promo-claim-btn"
                    onClick={onClaimDeal}
                    className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#1C130E] hover:bg-[#32231A] text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Klaim Promo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-[#8A7568]">
                    Kode kupon: <strong className="font-mono bg-[#EFEAE2] px-1.5 py-0.5 rounded text-[#1C130E]">MORNING1990</strong>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
