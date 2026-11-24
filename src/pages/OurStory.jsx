import FAQSection from '../components/sections/FAQSection';
import SectionLabel from '../components/ui/SectionLabel';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { pithas } from '../data/pithas';
import { gradientContainerStyle, handleImgError } from '../utils/image';

export default function OurStory() {
  return (
    <main className="bg-cream">
      {/* 1. Brand Narrative Header */}
      <div className="bg-pale-green border-b border-forest/10 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-label uppercase text-warm-gray mb-3">
              <span className="text-gold">✦</span>
              <span>Roots &amp; Heritage</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest text-balance leading-tight">
              Pitha was always about the hands that made it.
            </h1>

            <div className="space-y-6 text-warm-gray text-base sm:text-lg leading-relaxed mt-8">
              <p>
                Every winter across Bangladesh, as the morning mist settles over Dhaka, the scent of steaming rice flour and caramelized date palm molasses heralds a time-honored rhythm. It was never just about eating pitha &mdash; it was the quiet patience of grating fresh coconut, kneading flour to the exact crumble, and crowding around the steaming pot.
              </p>
              <p>
                Modern urban life made that ritual intimidating. Sourcing unadulterated <em>khejur gur</em> or getting the right coarse-milled rice flour required tedious market trips. Most families shifted from making pitha to buying cold, soggy batches from street stalls.
              </p>
              <p className="font-serif italic text-forest text-xl border-l-2 border-gold pl-5 py-1">
                &ldquo;Pitha Post began with a simple belief: if the sourcing and measuring were taken care of, making pitha at home would become a joyous weekend gathering once again.&rdquo;
              </p>
              <p>
                Each kit is packed in Dhaka in small weekly batches. We source authentic date palm jaggery directly from trusted artisanal tappers in Jessore, mill our rice flour fresh every Thursday, and enclose printed keepsake recipe cards. The warmth of the kitchen is yours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Three Pitha Varieties (Editorial Spotlight) */}
      <section className="bg-cream border-b border-forest/10 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Heritage Recipes</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mt-3">
              The Three Winter Classics
            </h2>
            <p className="text-warm-gray text-sm sm:text-base mt-2 max-w-xl">
              Each pitha represents a distinct culinary technique perfected over generations.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-24">
            {pithas.map(({ id, name, subtitle, description, tips, image }, i) => (
              <div
                key={id}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 rounded-3xl overflow-hidden shadow-lift border border-forest/10 aspect-[4/3] ${
                    i % 2 === 1 ? 'lg:col-start-7' : ''
                  }`}
                  style={gradientContainerStyle()}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={handleImgError('pitha')}
                  />
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-4 ${
                    i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-gold tracking-widest">
                    {`0${i + 1} / VARIETY`}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                    {name}
                  </h3>

                  <p className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                    {subtitle}
                  </p>

                  <p className="text-warm-gray text-base leading-relaxed">
                    {description}
                  </p>

                  {tips && tips.length > 0 && (
                    <div className="mt-4 bg-pale-green/60 rounded-2xl p-5 border border-forest/10">
                      <p className="text-xs font-sans font-semibold uppercase tracking-wider text-forest mb-2">
                        Kitchen secret:
                      </p>
                      <ul className="text-xs text-warm-gray space-y-1.5">
                        {tips.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-forest font-bold">&bull;</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-pale-green/60 py-20 lg:py-28" id="faq">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <SectionLabel>Good to know</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest leading-tight">
                Before the first little bite.
              </h2>
              <p className="text-sm text-warm-gray leading-relaxed">
                Everything you need to know about our sourcing, subscription model, delivery schedule in Dhaka, and kitchen prep.
              </p>
              <div className="pt-4">
                <Button as={Link} to="/boxes" variant="primary" size="md" className="shadow-soft">
                  Order this month &rarr;
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8 bg-cream rounded-3xl p-8 sm:p-10 border border-forest/10 shadow-soft">
              <FAQSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
