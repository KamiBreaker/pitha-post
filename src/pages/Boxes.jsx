import { useState } from 'react';
import { availableProducts, getByCategory } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import SectionLabel from '../components/ui/SectionLabel';
import AlpanaMotif from '../components/ui/AlpanaMotif';
import { businessConfig } from '../config/business';

const UPCOMING = [
  {
    name: 'Family Feast Box',
    bn: 'পারিবারিক মহোৎসব',
    desc: 'All five traditional varieties including Chitoi, Dudh Puli, and Patishapta serving 12+ for large winter gatherings.',
    priceEst: '৳1,850',
    eta: 'Mid-December',
  },
  {
    name: 'Patishapta Special',
    bn: 'পাটিসাপটা স্পেশাল',
    desc: 'Double batch stone-milled batter accompanied by three artisanal fillings: kheer, grated coconut, and date jaggery.',
    priceEst: '৳850',
    eta: 'Coming Soon',
  },
  {
    name: 'Heritage Holiday Gift Box',
    bn: 'ঐতিহ্যবাহী উপহারের ডালা',
    desc: 'Festive parcel with handmade clay steaming cups (মাটির সরা), a traditional brass spatula, and Jessore Nolen Gur.',
    priceEst: '৳1,400',
    eta: 'Festive Edition',
  },
];

export default function Boxes() {
  const [filter, setFilter] = useState('all'); // 'all' | 'monthly' | 'gift'

  const subscriptions = getByCategory('subscription');
  const gifts = getByCategory('gift');

  const displayedProducts = filter === 'monthly'
    ? subscriptions
    : filter === 'gift'
    ? gifts
    : availableProducts;

  return (
    <main className="bg-parchment min-h-screen">
      {/* 1. Header with Cultural Stamp */}
      <div className="bg-terracotta text-parchment-light border-b-2 border-forest py-16 lg:py-20 relative overflow-hidden">
        {/* Background seal */}
        <div className="absolute top-0 right-0 w-80 h-80 text-parchment/10 pointer-events-none">
          <AlpanaMotif className="w-full h-full" variant="seal" />
        </div>

        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl">
            <span className="bg-mustard text-forest px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-3">
              <AlpanaMotif className="w-3 h-3 text-forest" />
              THE PITHA POST CATALOGUE &bull; পিঠার তালিকা
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-black text-parchment-light leading-tight">
              Pick your parcel. Make pitha hot at home.
            </h1>
            <p className="text-parchment-light/90 text-base sm:text-lg mt-4 leading-relaxed">
              Every box is packed with stone-milled fragrant Atop rice flour, unadulterated Jessore date palm molasses, and keepsake step cards.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-mono font-bold text-forest">
              <span className="bg-parchment px-3.5 py-1.5 rounded-full border border-forest shadow-sm">
                📍 Dhaka Deliveries Only
              </span>
              <span className="bg-mustard px-3.5 py-1.5 rounded-full border border-forest shadow-sm">
                ✋ Manual Opt-In Each Month
              </span>
              <span className="bg-paddy px-3.5 py-1.5 rounded-full border border-forest shadow-sm">
                🌾 100% Pure Jessore Gur
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-20">

        {/* 2. Interactive Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest/70">
              Filter By &bull; ধরন:
            </span>
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All Parcels / সব' },
                { key: 'monthly', label: 'Monthly Kits / মাসিক' },
                { key: 'gift', label: 'Gift Boxes / উপহার' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold border-2 border-forest transition-all cursor-pointer ${
                    filter === key
                      ? 'bg-forest text-parchment shadow-stamp'
                      : 'bg-parchment-light text-forest hover:bg-parchment'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs font-mono text-terracotta font-bold">
            Showing {displayedProducts.length} packages available in Dhaka
          </span>
        </div>

        {/* 3. Product Cards Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 4. Future Roadmap & Seasonal Creations */}
        <section className="bg-parchment-light rounded-3xl p-8 sm:p-12 border-2 border-forest shadow-stamp">
          <div className="max-w-xl mb-8">
            <span className="bg-berry text-parchment-light px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest inline-block mb-2">
              COMING THIS WINTER &bull; আগাম আয়োজন
            </span>
            <h2 className="font-serif text-3xl font-black text-forest">
              Upcoming Seasonal Additions
            </h2>
            <p className="text-sm text-forest/80 mt-2">
              Our culinary team is developing larger feast boxes and specialty fillings for mid-winter celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {UPCOMING.map(({ name, bn, desc, priceEst, eta }) => (
              <div
                key={name}
                className="bg-parchment rounded-2xl p-6 border-2 border-dashed border-forest/30 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold bg-forest text-parchment px-2.5 py-0.5 rounded-sm">
                      {eta}
                    </span>
                    <span className="font-serif font-black text-sm text-terracotta">{priceEst}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest">{name}</h3>
                  <p className="font-bengali text-xs font-bold text-forest/70">{bn}</p>
                  <p className="text-xs text-forest/80 leading-relaxed mt-2.5">{desc}</p>
                </div>

                <div className="pt-3 border-t border-forest/15 text-[11px] font-mono text-terracotta font-bold flex items-center justify-between">
                  <span>Sign up for dispatch alert</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Honest Subscription Policy Box */}
        <section className="bg-forest text-parchment rounded-3xl p-8 sm:p-12 border-2 border-forest-deep shadow-stamp-mustard">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-mustard block mb-2">
                NO TRAP SUBSCRIPTION GUARANTEE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-parchment leading-tight">
                How our month-by-month ordering works.
              </h3>
              <p className="text-xs sm:text-sm text-parchment/75 leading-relaxed mt-3">
                We believe cultural food traditions should be celebrated freely, never coerced through automated credit card deductions.
              </p>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="bg-parchment/10 rounded-2xl p-5 border border-parchment/15">
                <p className="font-serif font-bold text-mustard text-base">Monthly Opt-in</p>
                <p className="text-xs text-parchment/80 leading-relaxed mt-1.5">
                  Before the 25th of each month, we ping you on WhatsApp. Confirm with one tap or skip without penalties.
                </p>
              </div>
              <div className="bg-parchment/10 rounded-2xl p-5 border border-parchment/15">
                <p className="font-serif font-bold text-mustard text-base">Payment On Your Terms</p>
                <p className="text-xs text-parchment/80 leading-relaxed mt-1.5">
                  Confirm via bKash or pay cash on delivery. No stored card details or international payment fees.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
