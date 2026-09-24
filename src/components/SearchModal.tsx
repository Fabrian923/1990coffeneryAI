import React, { useState } from 'react';
import { Search, X, Plus, Coffee } from 'lucide-react';
import { FULL_MENU } from '../data/coffeeData';
import { MenuItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = FULL_MENU.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#120B07]/75 backdrop-blur-sm transition-opacity"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FAF8F5] rounded-xl max-w-lg w-full border border-[#E7DFD5] shadow-2xl overflow-hidden mt-8 z-10"
      >
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-[#E7DFD5] flex items-center gap-2.5 bg-white">
          <Search className="w-4 h-4 text-[#8A7568] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari menu (cth: Latte, Cold Brew, V60, Croissant)..."
            className="w-full bg-transparent text-[#1C130E] placeholder-[#8A7568]/60 text-xs sm:text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Tutup pencarian"
            className="p-1 rounded-full text-[#8A7568] hover:text-[#1C130E] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-3 space-y-2">
          {results.length === 0 ? (
            <div className="py-10 text-center text-[#8A7568]">
              <Coffee className="w-6 h-6 text-[#B87B4C] mx-auto mb-2 opacity-80" />
              <p className="text-xs font-medium text-[#1C130E]">Menu tidak ditemukan</p>
              <p className="text-[11px] text-[#8A7568] mt-0.5">Coba cari &quot;Espresso&quot;, &quot;Latte&quot;, atau &quot;Kopi Susu&quot;</p>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                className="p-2.5 rounded-lg bg-white border border-[#E7DFD5] hover:border-[#B87B4C]/50 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-md object-cover bg-[#1C130E] shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-serif text-xs sm:text-sm font-medium text-[#1C130E] group-hover:text-[#B87B4C] transition-colors truncate">
                      {item.name}
                    </h4>
                    <span className="text-[11px] font-mono text-[#B87B4C]">Rp {Math.round(item.price * 15000).toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(item);
                    onClose();
                  }}
                  className="px-2.5 py-1 rounded-md bg-[#1C130E] hover:bg-[#32231A] text-white text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                >
                  <Plus className="w-3 h-3" /> Tambah
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
