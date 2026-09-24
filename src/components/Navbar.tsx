import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu as MenuIcon, X, Coffee } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenOrder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Fasilitas', href: '#facilities' },
    { label: 'Cerita Kami', href: '#story' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Lokasi', href: '#location' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7DFD5]/70 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-gradient-to-b from-[#120B07]/80 via-[#120B07]/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#1C130E] text-[#FAF8F5]'
                  : 'bg-[#FAF8F5] text-[#1C130E]'
              }`}
            >
              <Coffee className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg sm:text-xl font-medium tracking-tight transition-colors ${
                  isScrolled ? 'text-[#1C130E]' : 'text-[#FAF8F5]'
                }`}
              >
                1990 <span className="font-normal italic">coffeenery</span>
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.2em] font-medium -mt-1 transition-colors ${
                  isScrolled ? 'text-[#6E5343]' : 'text-[#E7DFD5]'
                }`}
              >
                Cianjur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#B87B4C] ${
                  isScrolled ? 'text-[#54433A]' : 'text-[#FAF8F5]/85'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Search, Cart, CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              id="navbar-search-btn"
              onClick={onOpenSearch}
              aria-label="Search menu"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#1C130E] hover:bg-[#E7DFD5]/40'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Icon with minimalist badge */}
            <button
              id="navbar-cart-btn"
              onClick={onOpenCart}
              aria-label="View shopping cart"
              className={`p-2 rounded-full relative transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#1C130E] hover:bg-[#E7DFD5]/40'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="absolute top-1 right-1 bg-[#B87B4C] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Order CTA - Minimalist Pill */}
            <button
              id="navbar-order-cta"
              onClick={onOpenOrder}
              className={`hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? 'bg-[#1C130E] hover:bg-[#32231A] text-[#FAF8F5]'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/20'
              }`}
            >
              Pesan
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#1C130E] hover:bg-[#E7DFD5]/40'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#FAF8F5] border-b border-[#E7DFD5] px-6 py-6 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#1C130E] hover:text-[#B87B4C] py-2 border-b border-[#E7DFD5]/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#8A7568]">&rarr;</span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                id="mobile-order-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-2.5 rounded-full bg-[#1C130E] hover:bg-[#32231A] text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Coffee className="w-3.5 h-3.5" /> Pesan Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
