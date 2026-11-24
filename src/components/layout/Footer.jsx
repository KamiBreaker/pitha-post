import { Link } from 'react-router-dom';
import { businessConfig } from '../../config/business';

const LINKS = [
  { label: 'The Kit & Boxes', to: '/boxes' },
  { label: 'How It Works',    to: '/how-it-works' },
  { label: 'Our Story',       to: '/our-story' },
  { label: 'FAQ',             to: '/our-story#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream border-t border-forest-light/20">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 justify-between">

          {/* Brand */}
          <div className="md:col-span-5 max-w-sm">
            <Link to="/" className="flex items-center gap-2.5 mb-3 group">
              <span className="w-8 h-8 rounded-full bg-cream text-forest flex items-center justify-center text-sm font-serif font-bold shadow-sm group-hover:bg-pale-green transition-all">
                পি
              </span>
              <span className="text-xl font-serif font-bold text-cream tracking-tight">
                {businessConfig.name}
              </span>
            </Link>
            <p className="text-sm text-cream/70 leading-relaxed mt-2">
              {businessConfig.tagline} Farm-sourced Bengali winter pitha kits delivered directly to homes across Dhaka.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-xs text-cream/50">
              <p>&bull; {businessConfig.deliveryNote}</p>
              <p>&bull; {businessConfig.cancelNote}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="md:col-span-3 flex flex-col gap-2.5">
            <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-gold mb-1">
              Explore
            </p>
            {LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-sm text-cream/75 hover:text-cream hover:translate-x-0.5 transition-all w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Direct CTA */}
          <div className="md:col-span-4 flex flex-col gap-3.5 bg-cream/5 rounded-2xl p-6 border border-cream/10">
            <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-gold">
              Order For This Month
            </p>
            <p className="text-xs text-cream/70 leading-relaxed">
              Orders confirmed directly via WhatsApp. Zero automated billing or stored card information.
            </p>
            <Link
              to="/boxes"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-cream text-forest text-sm font-semibold rounded-full hover:bg-pale-green transition-colors w-fit shadow-sm mt-1"
            >
              <span>See the boxes</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <span>&copy; {new Date().getFullYear()} {businessConfig.name}. Fictional academic e-business project.</span>
          <span>{businessConfig.contact.email} &middot; Dhaka, Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}
