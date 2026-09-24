import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Facilities } from './components/Facilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { OrderModal } from './components/OrderModal';
import { MenuItem, CartItem } from './types';
import { MENU_HIGHLIGHTS } from './data/coffeeData';
import { Check, Sparkles, Coffee, MessageCircle } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'default-latte',
      item: MENU_HIGHLIGHTS[1], // Latte
      quantity: 1,
      size: 'Regular',
      milkOption: 'Oat Milk',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [hasMorningPromo, setHasMorningPromo] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAddToCart = (item: MenuItem, size: 'Regular' | 'Large' = 'Regular', milkOption?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: `${item.id}-${Date.now()}`,
          item,
          quantity: 1,
          size,
          milkOption: milkOption || 'Whole Milk',
        },
      ];
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => setRecentlyAddedId(null), 1500);
    showToast(`Added ${item.name} to your order.`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    showToast('Item removed from order.');
  };

  const handleClaimDeal = () => {
    setHasMorningPromo(true);
    showToast('Promo Pagi aktif! Diskon 20% otomatis diterapkan pada keranjang Anda.');
    setIsCartOpen(true);
  };

  const handleConfirmOrder = (details: {
    item: MenuItem;
    size: 'Regular' | 'Large';
    temp: 'Hot' | 'Iced';
    milk: string;
    pickupTime: string;
  }) => {
    handleAddToCart(details.item, details.size, details.milk);
    showToast(`Pesanan ${details.item.name} (${details.temp}) dikonfirmasi! Siap diambil pukul ${details.pickupTime}.`);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCartItems([]);
    showToast('Terima kasih! Pesanan kopi Anda telah diteruskan ke meja barista kami.');
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C130E] font-sans antialiased flex flex-col selection:bg-[#B87B4C] selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenOrder={() => setIsOrderOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOrderNow={() => setIsOrderOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* Features / Menu Highlights Grid */}
        <Features
          onAddToCart={handleAddToCart}
          addedItemId={recentlyAddedId}
        />

        {/* Facilities Section */}
        <Facilities />

        {/* Promotional / Why Choose Us Split Screen */}
        <WhyChooseUs
          onClaimDeal={handleClaimDeal}
          onExploreStory={scrollToStory}
        />

        {/* Gallery Section: Atmosphere & Roastery */}
        <Gallery />

        {/* Location & Contact with Interactive Google Maps */}
        <LocationContact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating WhatsApp CTA Button */}
      <a
        href="https://wa.me/6281999571990?text=Halo%201990%20coffeenery,%20saya%20ingin%20memesan%20atau%20tanya%20info"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp 1990 Coffeenery"
        id="floating-whatsapp-btn"
        className="fixed bottom-5 right-5 z-40 bg-[#1C130E] hover:bg-[#32231A] text-white px-3.5 py-2.5 rounded-full shadow-lg border border-white/10 flex items-center gap-2 transition-all duration-200 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span className="text-xs font-medium tracking-wide">WhatsApp</span>
      </a>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        hasMorningPromo={hasMorningPromo}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        onConfirmOrder={handleConfirmOrder}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          id="app-toast-notification"
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#1C130E] text-white px-4 py-2.5 rounded-full shadow-xl border border-white/10 text-xs font-normal flex items-center gap-2 transition-all"
        >
          <div className="w-4 h-4 rounded-full bg-[#B87B4C] text-white flex items-center justify-center">
            <Check className="w-2.5 h-2.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
