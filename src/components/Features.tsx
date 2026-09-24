import React, { useState } from 'react';
import { Plus, Check, MessageCircle, Sparkles, Coffee, Utensils, CupSoda, Croissant } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_HIGHLIGHTS } from '../data/coffeeData';

interface FeaturesProps {
  onAddToCart: (item: MenuItem) => void;
  addedItemId: string | null;
}

type MenuCategory = 'all' | 'coffee' | 'non-coffee' | 'pastry-snack' | 'main-course';

export const Features: React.FC<FeaturesProps> = ({ onAddToCart, addedItemId }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const categories = [
    { id: 'all', label: 'Semua Menu', icon: Sparkles },
    { id: 'coffee', label: 'Kopi Khas (Coffee)', icon: Coffee },
    { id: 'non-coffee', label: 'Non-Kopi', icon: CupSoda },
    { id: 'pastry-snack', label: 'Pastry & Snack', icon: Croissant },
    { id: 'main-course', label: 'Makanan Berat', icon: Utensils },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_HIGHLIGHTS
    : MENU_HIGHLIGHTS.filter(item => item.category === activeCategory);

  const handleOrderWhatsApp = (item: MenuItem) => {
    const text = `Halo 1990 coffeenery, saya ingin memesan menu: *${item.name}* (${item.priceFormatted || 'Rp ' + item.price.toLocaleString('id-ID')}). Apakah tersedia?`;
    window.open(`https://wa.me/6281999571990?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#FAF8F5] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A7568] block mb-2">
            Pilihan Menu
          </span>
          <h2
            id="features-section-title"
            className="text-3xl sm:text-4xl font-serif text-[#1C130E] font-normal tracking-tight"
          >
            Menu <span className="italic font-light text-[#B87B4C]">Highlights</span>
          </h2>
          <p className="text-sm text-[#6E5343] leading-relaxed font-light mt-2.5">
            Racikan espresso khas, seduhan manual cold drip 18 jam, aneka minuman segar, hingga pastry hangat.
          </p>
        </div>

        {/* Minimalist Segmented Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-[#F2EDE6] rounded-full border border-[#E7DFD5] gap-1">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as MenuCategory)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1C130E] text-white shadow-sm'
                      : 'text-[#6E5343] hover:text-[#1C130E]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div
          id="features-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {filteredItems.map((item) => {
            const isAdded = addedItemId === item.id;

            return (
              <div
                key={item.id}
                id={`feature-card-${item.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-[#E7DFD5] hover:border-[#B87B4C]/50 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1C130E]">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Category Pill on Image */}
                    <span className="absolute top-2.5 right-2.5 bg-[#120B07]/70 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      {item.categoryLabel || item.category}
                    </span>

                    {/* Popular Tag */}
                    {item.popular && (
                      <span className="absolute top-2.5 left-2.5 bg-white text-[#1C130E] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                        Favorit
                      </span>
                    )}

                    {/* Price Tag pinned to bottom right of image */}
                    <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[#1C130E] font-medium text-xs shadow-sm">
                      {item.priceFormatted || `Rp ${item.price.toLocaleString('id-ID')}`}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-4">
                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[9px] uppercase font-medium tracking-wider text-[#8A7568] bg-[#F4EFEA] px-1.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Item Name */}
                    <h3
                      id={`feature-title-${item.id}`}
                      className="font-serif text-base text-[#1C130E] font-medium mb-1 group-hover:text-[#B87B4C] transition-colors leading-snug"
                    >
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#6E5343] leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-4 pt-0 mt-auto">
                  <div className="pt-3 border-t border-[#F2EDE6] flex items-center gap-2">
                    {/* Add to Cart / Order Button */}
                    <button
                      id={`feature-add-${item.id}`}
                      onClick={() => onAddToCart(item)}
                      className={`flex-1 py-1.5 px-3 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-[#3A5D45] text-white'
                          : 'bg-[#1C130E] hover:bg-[#32231A] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Ditambahkan</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Tambah</span>
                        </>
                      )}
                    </button>

                    {/* Quick WhatsApp Order Icon Button */}
                    <button
                      onClick={() => handleOrderWhatsApp(item)}
                      aria-label={`Pesan ${item.name} via WhatsApp`}
                      title="Pesan via WhatsApp"
                      className="w-7 h-7 rounded-full bg-[#FAF8F5] hover:bg-[#25D366] text-[#6E5343] hover:text-white border border-[#E7DFD5] flex items-center justify-center transition-all duration-200 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Minimalist Bottom Note: Reservasi atau Pesanan Khusus */}
        <div className="mt-12 rounded-xl bg-white border border-[#E7DFD5] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-base sm:text-lg text-[#1C130E] font-medium">
              Ingin pesan dalam jumlah banyak atau reservasi meja?
            </h3>
            <p className="text-xs text-[#6E5343] font-light mt-0.5">
              Hubungi langsung barista kami via WhatsApp untuk layanan instan.
            </p>
          </div>

          <a
            href="https://wa.me/6281999571990?text=Halo%201990%20coffeenery,%20saya%20ingin%20memesan%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#1C130E] hover:bg-[#32231A] text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat Barista</span>
          </a>
        </div>

      </div>
    </section>
  );
};
