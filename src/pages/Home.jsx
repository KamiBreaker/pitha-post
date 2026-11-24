import Hero from '../components/sections/Hero';
import ValueProposition from '../components/sections/ValueProposition';
import { Link } from 'react-router-dom';
import { getFeaturedProduct } from '../data/products';
import { pithas } from '../data/pithas';
import Button from '../components/ui/Button';
import SectionLabel from '../components/ui/SectionLabel';
import { businessConfig } from '../config/business';
import { gradientContainerStyle, handleImgError } from '../utils/image';
import { useCart } from '../context/CartContext';

export default function Home() {
  const featured = getFeaturedProduct();
  const { addItem, openCart } = useCart();

  function handleAddFeatured() {
    if (featured) {
      addItem(featured, 1);
      openCart();
    }
  }

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Pillars / Value Proposition */}
      <ValueProposition />

      {/* 3. Featured Kit Spotlight ("Inside the parcel") */}
      {featured && (
        <section className="bg-peach border-b border-forest/10 py-16 lg:py-24">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left narrative & pricing */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <SectionLabel>Inside the parcel</SectionLabel>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest leading-tight text-balance">
                  Three pithas.{' '}
                  <em className="font-serif italic font-normal text-terracotta">
                    One sweet box.
                  </em>
                </h2>

                <p className="text-warm-gray text-base leading-relaxed">
                  No searching across markets for the right stone-ground rice flour or authentic date palm jaggery.
                  We measure and pack the essentials &mdash; you bring simple kitchen basics and the family.
                </p>

                <div className="bg-cream/70 rounded-2xl p-5 border border-forest/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-sans font-semibold uppercase tracking-label text-warm-gray">
                      {featured.name} &middot; Serves {featured.servings}
                    </p>
                    <p className="font-serif text-2xl font-bold text-forest mt-0.5">
                      {businessConfig.currency}{featured.price.toLocaleString()}
                      <span className="text-xs font-sans font-normal text-warm-gray ml-1.5">
                        / monthly box
                      </span>
                    </p>
                  </div>

                  <Button
                    onClick={handleAddFeatured}
                    variant="primary"
                    size="md"
                    className="shadow-soft"
                  >
                    Add to bag &rarr;
                  </Button>
                </div>

                <p className="text-xs text-warm-gray flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Manual renewal each month. No auto-charges, cancel anytime before the 25th.</span>
                </p>
              </div>

              {/* Right: The Kit Includes List */}
              <div className="lg:col-span-7">
                <div className="bg-cream rounded-3xl p-8 lg:p-10 shadow-soft border border-forest/10">
                  <div className="flex items-center justify-between pb-6 border-b border-forest/10">
                    <span className="section-label">The kit includes</span>
                    <span className="text-xs font-sans text-forest font-medium bg-pale-green px-3 py-1 rounded-full">
                      Everything pre-measured
                    </span>
                  </div>

                  <div className="divide-y divide-forest/10">
                    {featured.includes.map((inc, i) => (
                      <div
                        key={inc.item}
                        className="py-4 flex items-center justify-between gap-4 group hover:bg-pale-green/40 px-3 -mx-3 rounded-xl transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-xs text-warm-gray-light font-semibold mt-0.5">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <p className="font-serif text-base font-semibold text-forest">
                              {inc.item}
                            </p>
                            <p className="text-xs text-warm-gray mt-0.5">
                              {inc.note}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-sans font-medium text-forest-muted bg-pale-green px-2.5 py-1 rounded-md shrink-0">
                          Included
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-warm-gray flex items-center gap-2">
                    <span className="text-forest">🍲</span>
                    <span>
                      Keep water, a pinch of salt, and a steamer nearby. Patishapta crepe also needs a splash of milk.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. Three Lovely Ways to Pitha (Parcel to Plate) */}
      <section className="bg-pale-green/60 border-b border-forest/10 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <SectionLabel>From parcel to plate</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mt-3 text-balance">
                Three lovely ways to pitha.
              </h2>
            </div>
            <p className="text-sm text-warm-gray max-w-sm">
              A trio of Bengali winter favorites, all prepared using the authentic ingredients inside your parcel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pithas.map(({ id, name, subtitle, tagline, description, image }, i) => (
              <div
                key={id}
                className="bg-cream rounded-3xl overflow-hidden border border-forest/10 shadow-soft hover:shadow-lift transition-all duration-300 group flex flex-col"
              >
                {/* Photo */}
                <div
                  className="aspect-[4/3] w-full relative overflow-hidden"
                  style={gradientContainerStyle()}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={handleImgError('pitha')}
                  />
                  <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm text-forest text-xs font-mono font-semibold px-2.5 py-1 rounded-full">
                    {`0${i + 1}`}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-forest">
                      {name}{' '}
                      <span className="font-sans text-xs font-normal text-warm-gray ml-1">
                        &middot; {subtitle}
                      </span>
                    </h3>
                    <p className="text-xs font-medium text-terracotta mt-1">
                      {tagline}
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed mt-2.5">
                      {description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-forest/10 flex items-center justify-between text-xs">
                    <span className="text-forest-muted font-medium">Included in Winter Trio</span>
                    <Link
                      to="/our-story"
                      className="font-medium text-forest hover:text-forest-light flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      Recipe details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A Note From Our Kitchen (Tips Section) */}
      <section className="bg-cream border-b border-forest/10 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 flex flex-col gap-4">
              <SectionLabel>A note from our kitchen</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest leading-tight">
                A soft hand makes{' '}
                <em className="font-serif italic font-normal text-forest-muted">
                  soft pitha.
                </em>
              </h2>
              <p className="text-warm-gray text-base leading-relaxed">
                The printed recipe cards guide you through each stage. These golden rules from traditional home cooks ensure your very first batch steams and folds to perfection.
              </p>
              <div className="pt-2">
                <Link
                  to="/how-it-works"
                  className="text-sm font-sans font-semibold text-forest hover:text-forest-light inline-flex items-center gap-1.5"
                >
                  <span>Read how the journey works</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  n: '01',
                  t: 'For bhapa, keep the flour fluffy.',
                  b: 'Sprinkle water gradually with gentle fingertips until the flour resembles wet beach sand. Never knead into dough; rubbing lightly through a sieve keeps every steamed bite cloud-soft.',
                },
                {
                  n: '02',
                  t: 'For patishapta, keep the batter thin.',
                  b: 'Whisk the stone-ground rice flour with milk until it pours with ease. Cook delicate crêpes over a gentle flame before spreading the fragrant coconut-gur filling.',
                },
                {
                  n: '03',
                  t: 'For puli, seal the edges gently.',
                  b: 'Dampen your thumb with a droplet of warm water to crimp the half-moon edges firmly. A secure seal keeps the caramelized date jaggery safely inside during steaming.',
                },
              ].map(({ n, t, b }) => (
                <div
                  key={n}
                  className="bg-pale-green/40 hover:bg-pale-green/70 rounded-2xl p-6 border border-forest/10 transition-colors flex gap-5 items-start"
                >
                  <span className="font-mono text-sm font-bold text-gold shrink-0 mt-0.5">
                    {n}
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-bold text-forest">
                      {t}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mt-1">
                      {b}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. Editorial CTA Banner */}
      <section className="bg-forest text-cream py-16 lg:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] font-sans uppercase tracking-label text-gold font-semibold">
              ✦ Fresh seasonal deliveries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mt-2 text-balance text-cream">
              Your pitha month starts with a message.
            </h2>
            <p className="text-cream/70 mt-3 text-sm sm:text-base leading-relaxed">
              Select your favorite box, provide your delivery neighborhood in Dhaka, and finalize your parcel via WhatsApp. No recurring subscriptions without your say.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Button
              as={Link}
              to="/boxes"
              variant="secondary"
              size="lg"
              className="bg-cream text-forest hover:bg-pale-green border-none shadow-lift font-semibold"
            >
              Order this month &rarr;
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
