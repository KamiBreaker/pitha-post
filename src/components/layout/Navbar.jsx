import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { businessConfig } from '../../config/business';
import AlpanaMotif from '../ui/AlpanaMotif';

const NAV_LINKS = [
  { label: 'The Kit & Boxes', bn: 'পিঠার বাক্স',  to: '/boxes' },
  { label: 'How It Works',    bn: 'পদ্ধতি',      to: '/how-it-works' },
  { label: 'Our Story',       bn: 'আমাদের কথা',  to: '/our-story' },
];

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-parchment/95 backdrop-blur-md border-b-2 border-forest/15 shadow-sm transition-all">
      {/* 1. Rich Berry Red Announcement Strip */}
      <div className="bg-berry text-parchment-light text-xs font-sans font-medium tracking-wide py-2 px-4 border-b border-berry-dark/40">
        <div className="max-w-editorial mx-auto w-full flex items-center justify-between gap-4 px-2 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="bg-mustard text-forest font-bold text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">
              শীতকালীন বিশেষ
            </span>
            <span className="hidden sm:inline text-parchment-light/90">
              পৌষ পার্বণের খাঁটি স্বাদ &bull; Jessore Khejur Gur &amp; Fresh Stone-Ground Rice Flour
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-sans font-semibold tracking-wider text-mustard">
            <span>DHAKA DISPATCH ONLY</span>
            <span className="text-parchment-light/40">&bull;</span>
            <span className="text-parchment-light/80">NO AUTO-RENEWAL</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand identity: bilingual typography & seal motif */}
        <Link to="/" className="flex items-center gap-3.5 group">
          {/* Postmark Seal Icon */}
          <div className="w-12 h-12 rounded-full bg-forest text-parchment flex flex-col items-center justify-center border-2 border-terracotta shadow-stamp group-hover:bg-terracotta group-hover:border-forest transition-all duration-300">
            <span className="font-bengali font-bold text-lg leading-none text-mustard">
              পো
            </span>
            <span className="text-[8px] font-mono uppercase tracking-widest text-parchment/80">
              DAC
            </span>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-serif font-black text-forest tracking-tight group-hover:text-terracotta transition-colors">
                {businessConfig.name}
              </span>
              <span className="font-bengali font-bold text-sm text-terracotta hidden sm:inline">
                পিঠা পোস্ট
              </span>
            </div>
            <p className="text-[10px] font-sans font-semibold tracking-stamp uppercase text-warm-gray">
              Modern Bengali Heritage &bull; Est. 2026
            </p>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-3">
          {NAV_LINKS.map(({ label, bn, to }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex flex-col items-center px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-parchment-light text-terracotta font-bold border-2 border-forest shadow-sm'
                    : 'text-forest hover:text-terracotta hover:bg-parchment-light/60'
                }`}
              >
                <span className="text-sm font-sans font-semibold tracking-wide">
                  {label}
                </span>
                <span className="text-[10px] font-bengali text-warm-gray">
                  {bn}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Bag Cluster */}
        <div className="flex items-center gap-3">
          {/* Shopping Bag Trigger */}
          <button
            onClick={openCart}
            aria-label="View shopping bag"
            className="flex items-center gap-2.5 bg-mustard hover:bg-mustard-light text-forest px-4 sm:px-5 py-2.5 rounded-full border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer font-bold"
          >
            <span className="text-xs uppercase tracking-wider font-mono">
              Bag / ঝুলি
            </span>
            <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-black ${
              itemCount > 0 ? 'bg-forest text-parchment' : 'bg-forest/15 text-forest'
            }`}>
              {itemCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border-2 border-forest bg-parchment-light flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            <span className={`w-5 h-0.5 bg-forest transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-5 h-0.5 bg-forest transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-forest transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-parchment-light border-b-2 border-forest px-6 py-6 space-y-4">
          {NAV_LINKS.map(({ label, bn, to }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                  isActive
                    ? 'bg-parchment text-terracotta border-forest font-bold shadow-sm'
                    : 'border-transparent text-forest hover:bg-parchment'
                }`}
              >
                <span className="text-base font-serif font-bold">{label}</span>
                <span className="text-xs font-bengali text-warm-gray">{bn}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
