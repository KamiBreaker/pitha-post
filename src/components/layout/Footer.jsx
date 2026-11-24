import { Link } from 'react-router-dom';
import { businessConfig } from '../../config/business';
import AlpanaMotif from '../ui/AlpanaMotif';

const LINKS = [
  { label: 'The Kit & Boxes', bn: 'পিঠার বাক্স',  to: '/boxes' },
  { label: 'How It Works',    bn: 'পদ্ধতি ও রুট', to: '/how-it-works' },
  { label: 'Our Story',       bn: 'আমাদের কথা',  to: '/our-story' },
  { label: 'FAQ',             bn: 'প্রশ্নোত্তর',   to: '/our-story#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-parchment border-t-4 border-terracotta pt-16 pb-12 relative overflow-hidden">
      {/* Decorative subtle Alpana backdrop */}
      <div className="absolute bottom-0 right-0 w-80 h-80 text-parchment/5 pointer-events-none">
        <AlpanaMotif className="w-full h-full" variant="seal" />
      </div>

      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 justify-between">

          {/* Column 1: Brand & Cultural Mission */}
          <div className="md:col-span-5 max-w-sm">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-terracotta text-parchment-light flex items-center justify-center font-bengali font-bold text-lg border-2 border-forest shadow-sm">
                পো
              </div>
              <div>
                <span className="text-2xl font-serif font-black text-parchment tracking-tight block">
                  {businessConfig.name}
                </span>
                <span className="font-bengali text-xs font-bold text-mustard">
                  পিঠা পোস্ট &bull; আধুনিক ঐতিহ্য
                </span>
              </div>
            </Link>

            <p className="text-sm text-parchment/70 leading-relaxed">
              Bringing authentic Bengali winter pitha traditions into urban Dhaka kitchens with unadulterated Jessore date palm jaggery and stone-milled Atop flour.
            </p>

            <div className="mt-5 space-y-1.5 text-xs text-parchment/60 font-mono">
              <p>&bull; Deliveries dispatched across Dhaka in weekly batches.</p>
              <p>&bull; Month-by-month manual confirmation &bull; Zero auto-rebilling.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <nav className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-mustard mb-1 flex items-center gap-1.5">
              <AlpanaMotif className="w-3 h-3 text-mustard" />
              NAVIGATION &bull; সূচিপত্র
            </span>
            {LINKS.map(({ label, bn, to }) => (
              <Link
                key={label}
                to={to}
                className="text-sm text-parchment/80 hover:text-mustard hover:translate-x-1 transition-all w-fit flex items-baseline gap-2"
              >
                <span>{label}</span>
                <span className="text-[11px] font-bengali text-parchment/50">({bn})</span>
              </Link>
            ))}
          </nav>

          {/* Column 3: Postal Order Box */}
          <div className="md:col-span-4 bg-forest rounded-2xl p-6 border-2 border-parchment/15 shadow-stamp flex flex-col justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-mustard block mb-1">
                WINTER 2026 DISPATCH
              </span>
              <h4 className="font-serif text-lg font-bold text-parchment">
                Reserve Your Weekend Pitha Kit
              </h4>
              <p className="text-xs text-parchment/70 leading-relaxed mt-1.5">
                Orders close before the 25th of the month. Prepared by hand in limited batches for Dhaka.
              </p>
            </div>

            <Link
              to="/boxes"
              className="w-full text-center py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-mustard hover:bg-mustard-light text-forest border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              Order This Month&rsquo;s Box &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="mt-14 pt-8 border-t border-parchment/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-parchment/40">
          <span>&copy; {new Date().getFullYear()} {businessConfig.name} &bull; Modern Bengali Heritage E-Business.</span>
          <span>Dhaka, Bangladesh &bull; {businessConfig.contact.email}</span>
        </div>
      </div>
    </footer>
  );
}
