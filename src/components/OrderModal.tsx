import React, { useState } from 'react';
import { X, Check, Coffee, Clock, Sparkles } from 'lucide-react';
import { MENU_HIGHLIGHTS } from '../data/coffeeData';
import { MenuItem } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmOrder: (orderDetails: {
    item: MenuItem;
    size: 'Regular' | 'Large';
    temp: 'Hot' | 'Iced';
    milk: string;
    pickupTime: string;
  }) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  onConfirmOrder,
}) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>(MENU_HIGHLIGHTS[1]); // default Latte
  const [size, setSize] = useState<'Regular' | 'Large'>('Regular');
  const [temp, setTemp] = useState<'Hot' | 'Iced'>('Hot');
  const [milk, setMilk] = useState<string>('Oat Milk');
  const [pickupTime, setPickupTime] = useState<string>('In 10 Minutes');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmOrder({
      item: selectedItem,
      size,
      temp,
      milk,
      pickupTime,
    });
    onClose();
  };

  const calculatedPrice = size === 'Large' ? selectedItem.price + 0.75 : selectedItem.price;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#120B07]/75 backdrop-blur-sm transition-opacity"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FAF8F5] rounded-xl max-w-lg w-full border border-[#E7DFD5] shadow-2xl overflow-hidden z-10"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#E7DFD5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E7DFD5] text-[#1C130E] flex items-center justify-center">
              <Coffee className="w-4 h-4 text-[#B87B4C]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-[#1C130E]">Pesan Cepat</h3>
              <p className="text-xs text-[#8A7568]">Siap diambil di 1990 coffeenery Cianjur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="p-1 rounded-full text-[#8A7568] hover:text-[#1C130E] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Select Beverage */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A7568] mb-2">
              Pilih Seduhan
            </label>
            <div className="grid grid-cols-2 gap-2">
              {MENU_HIGHLIGHTS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-2.5 rounded-lg border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    selectedItem.id === item.id
                      ? 'border-[#B87B4C] bg-white shadow-sm'
                      : 'border-[#E7DFD5] bg-white/70 hover:bg-white'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-md object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-xs font-medium text-[#1C130E] truncate">{item.name}</p>
                    <p className="text-[11px] font-mono text-[#B87B4C]">Rp {Math.round(item.price * 15000).toLocaleString('id-ID')}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Temperature & Size */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A7568] mb-1.5">
                Penyajian
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Hot', 'Iced'] as const).map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTemp(t)}
                    className={`py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                      temp === t
                        ? 'bg-[#1C130E] text-white border-[#1C130E]'
                        : 'bg-white text-[#6E5343] border-[#E7DFD5] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {t === 'Hot' ? 'Panas' : 'Dingin'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A7568] mb-1.5">
                Ukuran
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Regular', 'Large'] as const).map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                      size === s
                        ? 'bg-[#1C130E] text-white border-[#1C130E]'
                        : 'bg-white text-[#6E5343] border-[#E7DFD5] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Milk Choice */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A7568] mb-1.5">
              Pilihan Susu
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {['Oat Milk', 'Fresh Milk', 'Almond Milk'].map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() => setMilk(m)}
                  className={`py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                    milk === m
                      ? 'bg-[#B87B4C] text-white border-[#B87B4C]'
                      : 'bg-white text-[#6E5343] border-[#E7DFD5] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Pickup Timing */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A7568] mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B87B4C]" /> Waktu Pengambilan
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full bg-white border border-[#E7DFD5] rounded-lg px-3 py-2 text-xs font-medium text-[#1C130E] focus:outline-none focus:border-[#B87B4C]"
            >
              <option value="10 Menit">10 Menit lagi</option>
              <option value="20 Menit">20 Menit lagi</option>
              <option value="30 Menit">30 Menit lagi</option>
              <option value="45 Menit">45 Menit lagi</option>
            </select>
          </div>

          {/* Price & Submit */}
          <div className="pt-3 border-t border-[#E7DFD5] flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#8A7568]">Estimasi Total</span>
              <p className="text-xl font-serif font-semibold text-[#1C130E]">
                Rp {Math.round(calculatedPrice * 15000).toLocaleString('id-ID')}
              </p>
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#1C130E] hover:bg-[#32231A] text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" /> Konfirmasi Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
