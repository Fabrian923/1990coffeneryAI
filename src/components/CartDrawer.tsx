import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  hasMorningPromo: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  hasMorningPromo,
}) => {
  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  const discount = hasMorningPromo ? rawSubtotal * 0.2 : 0;
  const subtotal = Math.max(0, rawSubtotal - discount);
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#120B07]/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#E7DFD5]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E7DFD5] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#B87B4C]" />
              <h2 className="font-serif text-base font-medium text-[#1C130E]">Pesanan Anda</h2>
              <span className="text-[11px] bg-[#1C130E] text-white px-2 py-0.5 rounded-full font-medium">
                {items.reduce((count, i) => count + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Tutup keranjang"
              className="p-1 rounded-full text-[#8A7568] hover:text-[#1C130E] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Morning Promo Banner in Cart */}
          {hasMorningPromo && (
            <div className="bg-[#B87B4C]/10 border-b border-[#B87B4C]/20 px-5 py-2 flex items-center justify-between text-xs text-[#1C130E]">
              <span className="flex items-center gap-1.5 font-medium">
                <Tag className="w-3.5 h-3.5 text-[#B87B4C]" /> Promo Pagi (Diskon 20%) Aktif!
              </span>
              <span className="font-mono text-[#B87B4C] font-semibold">-Rp {Math.round(discount * 15000).toLocaleString('id-ID')}</span>
            </div>
          )}

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#8A7568] p-6">
                <div className="w-12 h-12 rounded-full bg-[#E7DFD5]/50 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-5 h-5 text-[#8A7568]" />
                </div>
                <h3 className="font-serif text-base font-medium text-[#1C130E] mb-1">Keranjang masih kosong</h3>
                <p className="text-xs text-[#8A7568] max-w-xs mb-5 font-light">
                  Pilih seduhan kopi andalan atau hidangan favorit Anda untuk memulai pesanan.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full bg-[#1C130E] text-white text-xs font-medium hover:bg-[#32231A] transition-colors cursor-pointer"
                >
                  Lihat Menu
                </button>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="p-3 rounded-lg bg-white border border-[#E7DFD5] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-3"
                >
                  <img
                    src={cartItem.item.imageUrl}
                    alt={cartItem.item.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-md object-cover bg-[#1C130E] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif text-xs sm:text-sm font-medium text-[#1C130E] truncate">
                        {cartItem.item.name}
                      </h4>
                      <span className="text-xs font-mono text-[#B87B4C] font-medium">
                        Rp {Math.round(cartItem.item.price * cartItem.quantity * 15000).toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#8A7568] mt-0.5 space-x-1">
                      <span>{cartItem.size}</span>
                      {cartItem.milkOption && <span>· {cartItem.milkOption}</span>}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-[#E7DFD5] rounded-md bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, -1)}
                          aria-label="Kurangi"
                          className="p-1 text-[#8A7568] hover:text-[#1C130E]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono text-[#1C130E]">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, 1)}
                          aria-label="Tambah"
                          className="p-1 text-[#8A7568] hover:text-[#1C130E]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(cartItem.id)}
                        aria-label="Hapus"
                        className="text-xs text-[#8A7568] hover:text-red-700 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Calculations */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#E7DFD5] bg-white space-y-3">
              <div className="space-y-1.5 text-xs text-[#6E5343]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">Rp {Math.round(rawSubtotal * 15000).toLocaleString('id-ID')}</span>
                </div>
                {hasMorningPromo && (
                  <div className="flex justify-between text-[#B87B4C] font-medium">
                    <span>Diskon Pagi (20%)</span>
                    <span className="font-mono">-Rp {Math.round(discount * 15000).toLocaleString('id-ID')}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-serif font-semibold text-[#1C130E] pt-2 border-t border-[#E7DFD5]">
                  <span>Total</span>
                  <span className="font-mono">Rp {Math.round(subtotal * 15000).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button
                id="cart-checkout-btn"
                onClick={onCheckout}
                className="w-full py-3 rounded-full bg-[#1C130E] hover:bg-[#32231A] text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Selesaikan Pesanan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-center text-[#8A7568]">
                Pesanan langsung disiapkan oleh barista 1990 coffeenery.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
