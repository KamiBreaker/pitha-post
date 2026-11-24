import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { businessConfig } from '../../config/business';

const NAV_LINKS = [
  { label: 'The Kit',       to: '/boxes' },
  { label: 'How It Works',  to: '/how-it-works' },
  { label: 'Our Story',     to: '/our-story' },
];

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 z-40">
      {/* Top artisanal announcement bar */}
      <div className="bg-forest text-cream text-[11px] font-sans font-medium tracking-wide py-2 px-4 text-center border-b border-forest-light/30 flex items-center justify-center gap-2">
        <span>Small-batch ingredients</span>
        <span className="text-gold">✦</span>
        <span>A little tradition, ready to make</span>
      </div>

      {/* Main navigation header */}
      <header className="bg-cream/95 backdrop-blur-md border-b border-forest/10 transition-colors">
        <div className="max-w-content mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center text-sm font-serif font-bold shadow-sm group-hover:bg-forest-light transition-all">
              পি
            </span>
            <span className="text-xl font-serif font-semibold text-forest tracking-tight group-hover:text-forest-light transition-colors">
              {businessConfig.name}
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-sans transition-all py-1 relative ${
                    isActive
                      ? 'text-forest font-semibold'
                      : 'text-warm-gray hover:text-forest'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-forest rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bag button */}
          <button
            onClick={openCart}
            aria-label="View shopping bag"
            className="flex items-center gap-2.5 text-sm font-sans font-medium text-forest hover:text-forest-light bg-pale-green/60 hover:bg-pale-green px-4 py-2 rounded-full border border-forest/10 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <span>Bag</span>
            <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold transition-colors ${
              itemCount > 0
                ? 'bg-forest text-cream'
                : 'bg-forest/10 text-forest'
            }`}>
              {itemCount}
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}
