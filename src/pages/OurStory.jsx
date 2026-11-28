import FAQSection from '../components/sections/FAQSection';
import SectionLabel from '../components/ui/SectionLabel';
import { Link } from 'react-router-dom';
import { pithas } from '../data/pithas';
import AlpanaMotif from '../components/ui/AlpanaMotif';
import { gradientContainerStyle, handleImgError } from '../utils/image';

export default function OurStory() {
  return (
    <main className="bg-parchment min-h-screen">
      {/* 1. Brand Narrative Header */}
      <div className="bg-forest text-parchment py-20 lg:py-28 relative overflow-hidden border-b-2 border-forest-deep">
        {/* Background Alpana */}
        <div className="absolute top-0 right-0 w-96 h-96 text-parchment/5 pointer-events-none">
          <AlpanaMotif className="w-full h-full" variant="seal" />
        </div>

        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-mustard text-forest px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-4">
              <AlpanaMotif className="w-3 h-3 text-forest" />
              OUR ROOTS &amp; MISSION &bull; ঐতিহ্যের গল্প
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl font-black text-parchment leading-tight text-balance">
              Pitha was never just food. It was a family gathering.
            </h1>

            <div className="space-y-6 text-parchment/80 text-base sm:text-lg leading-relaxed mt-8">
              <p>
                In the rural winter mornings of Bengal, the hearth was never cold. Grandmothers and aunts sat beside clay steaming pots, carefully sifting fresh rice flour through handwoven wicker strainers, layering fragrant grated coconut with dark, caramelized molasses tapped only hours before.
              </p>
              <p>
                As life got busier in Dhaka, that tradition became harder to keep up. Making pitha meant multiple bazaar trips, and street-side pitha was often cold and made with diluted sugar syrup.
              </p>
              <div className="bg-parchment/10 rounded-2xl p-6 border-l-4 border-mustard my-4">
                <p className="font-serif italic text-mustard text-xl leading-relaxed">
                  &ldquo;Pitha Post started with a simple idea: bringing winter pitha back to home kitchens. By sourcing directly from Jessore tappers and measuring out the ingredients, making pitha is quick, simple, and fun for the family.&rdquo;
                </p>
              </div>
              <p>
                Each batch is packed fresh in sealed boxes. We test our date molasses for purity, mill our rice flour on Thursdays, and include clear recipe cards so anyone can make pitha at home with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Three Heritage Pitha Spotlights */}
      <section className="bg-parchment py-20 lg:py-28 border-b-2 border-forest/15">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="bg-terracotta text-parchment-light px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest inline-block mb-2">
              HERITAGE RECIPE SHOWCASE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-forest">
              Signature Winter Classics
            </h2>
            <p className="text-forest/70 text-base mt-2">
              A closer look at all six traditional winter pithas in our kitchen, from steamed classics to golden fried favorites.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {pithas.map(({ id, name, subtitle, description, tips, image }, i) => (
              <div
                key={id}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Photo with Heritage Frame */}
                <div
                  className={`lg:col-span-6 rounded-3xl overflow-hidden border-2 border-forest shadow-stamp aspect-[4/3] bg-forest/10 relative ${
                    i % 2 === 1 ? 'lg:col-start-7' : ''
                  }`}
                  style={gradientContainerStyle()}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={handleImgError('pitha')}
                  />
                  <div className="absolute top-4 left-4 bg-forest text-mustard px-3 py-1 rounded-sm text-xs font-mono font-bold">
                    {`0${i + 1} / HERITAGE DISH`}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-4 ${
                    i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-widest">
                    {subtitle}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl font-black text-forest">
                    {name}
                  </h3>

                  <p className="text-forest/80 text-base leading-relaxed">
                    {description}
                  </p>

                  {tips && tips.length > 0 && (
                    <div className="mt-4 bg-parchment-light rounded-2xl p-6 border-2 border-forest/15 shadow-sm">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta mb-2 flex items-center gap-1.5">
                        <span>💡</span>
                        <span>Kitchen Secret &bull; রান্নার পরামর্শ</span>
                      </p>
                      <ul className="text-xs sm:text-sm text-forest/90 space-y-2">
                        {tips.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-terracotta font-bold">&bull;</span>
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

      {/* 3. FAQ Section (Muted Cream Background) */}
      <section className="bg-cream py-20 lg:py-28 border-b-2 border-forest/15" id="faq">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="bg-forest text-parchment px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest w-fit border border-forest-deep">
                GOOD TO KNOW &bull; প্রশ্নোত্তর
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-forest leading-tight">
                Frequently Asked Questions.
              </h2>
              <p className="text-sm sm:text-base text-forest/75 leading-relaxed">
                Everything about our ingredient origins, weekly dispatch logistics in Dhaka, and kitchen preparation.
              </p>
              <div className="pt-4">
                <Link
                  to="/boxes"
                  className="inline-block bg-terracotta hover:bg-terracotta-deep text-parchment-light font-bold text-sm px-7 py-3.5 rounded-full border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                >
                  Order This Month&rsquo;s Box &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-parchment rounded-3xl p-8 sm:p-10 border-2 border-forest shadow-stamp">
              <FAQSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
