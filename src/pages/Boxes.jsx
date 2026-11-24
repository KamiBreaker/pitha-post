import { availableProducts, getByCategory } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import SectionLabel from '../components/ui/SectionLabel';
import { businessConfig } from '../config/business';

const UPCOMING = [
  {
    name: 'Family Feast',
    desc: 'All five traditional pithas including Chitoi and Dudh Puli for large gatherings of 10–12.',
    eta: 'Mid-December',
  },
  {
    name: 'Patishapta Special',
    desc: 'Extra stone-ground batter with three artisanal fillings: kheer, grated coconut, and date jaggery.',
    eta: 'Coming soon',
  },
  {
    name: 'Seasonal Gift Box',
    desc: 'Festive packaging with an earthen steaming pot (malai sharashi) and brass cooking spoon.',
    eta: 'Holiday Edition',
  },
];

export default function Boxes() {
  const subscriptions = getByCategory('subscription');
  const gifts         = getByCategory('gift');
  const seasonal      = getByCategory('seasonal');

  return (
    <main className="bg-cream min-h-screen">
      {/* Page Header */}
      <div className="bg-pale-green border-b border-forest/10 py-16 lg:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-label uppercase text-warm-gray mb-3">
              <span className="text-gold">✦</span>
              <span>The Winter Collection</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest text-balance">
              Pick a kit. Make fresh pitha.
            </h1>
            <p className="text-warm-gray mt-4 text-base sm:text-lg leading-relaxed">
              Every box is packed with stone-milled rice flour, pure khejur gur from Jessore, and detailed step-by-step guides.
              Subscriptions are confirmed month-by-month &mdash; never automated billing.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-forest-muted">
              <span className="bg-cream/80 px-3 py-1.5 rounded-full border border-forest/10 flex items-center gap-1.5">
                <span>📍</span> Weekly batches in Dhaka
              </span>
              <span className="bg-cream/80 px-3 py-1.5 rounded-full border border-forest/10 flex items-center gap-1.5">
                <span>🗓️</span> Confirm or skip before the 25th
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 space-y-20">

        {/* 1. Monthly Subscription Kits */}
        {subscriptions.length > 0 && (
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-forest/10 gap-3">
              <div>
                <SectionLabel>Monthly kits</SectionLabel>
                <h2 className="font-serif text-3xl font-semibold text-forest mt-1">
                  Seasonal Subscriptions
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-warm-gray">
                Billed only when you re-confirm your monthly delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {subscriptions.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* 2. One-Time Gift Boxes */}
        {gifts.length > 0 && (
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-forest/10 gap-3">
              <div>
                <SectionLabel>Care packages</SectionLabel>
                <h2 className="font-serif text-3xl font-semibold text-forest mt-1">
                  Gift a Box
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-warm-gray">
                A single festive parcel delivered to friends or family in Dhaka.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gifts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* 3. Upcoming Kits (Future Catalogue Roadmap) */}
        <section>
          <div className="mb-8 pb-4 border-b border-forest/10">
            <SectionLabel>In development</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold text-forest mt-1">
              Coming Later This Season
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {UPCOMING.map(({ name, desc, eta }) => (
              <div
                key={name}
                className="rounded-3xl border border-dashed border-forest/20 p-7 bg-cream-light/50 flex flex-col justify-between gap-4 transition-colors hover:border-forest/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-warm-gray bg-pale-green px-2.5 py-1 rounded-full">
                      {eta}
                    </span>
                    <span className="text-xs text-warm-gray">✦ Concept</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest">
                    {name}
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mt-2">
                    {desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-forest/10 text-xs text-forest font-medium flex items-center justify-between">
                  <span>Sign up for notification</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Subscription Policy Breakdown */}
        <section className="bg-peach rounded-3xl p-8 sm:p-10 border border-forest/10">
          <SectionLabel className="mb-3">How our subscription works</SectionLabel>
          <h3 className="font-serif text-2xl font-semibold text-forest mb-6">
            The honest, no-trap pitha promise
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 text-sm">
            {[
              {
                emoji: '✋',
                title: 'Manual confirmation',
                body: 'We never store card tokens or bill automatically. Each month you receive a friendly WhatsApp check-in to confirm or skip.',
              },
              {
                emoji: '📅',
                title: '25th cutoff schedule',
                body: 'Orders are gathered before the 25th of each month so our sourcing team can collect fresh date molasses directly from farms.',
              },
              {
                emoji: '🛵',
                title: 'Fresh weekly dispatch',
                body: 'Deliveries run across Dhaka in temperature-controlled batch deliveries to keep ingredients at optimal kitchen freshness.',
              },
            ].map(({ emoji, title, body }) => (
              <div key={title} className="flex flex-col gap-2">
                <span className="text-2xl">{emoji}</span>
                <p className="font-serif font-bold text-forest text-base">{title}</p>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
