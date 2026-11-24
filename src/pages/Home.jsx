import Hero from '../components/sections/Hero';
import { Link } from 'react-router-dom';
import { getFeaturedProduct, availableProducts } from '../data/products';
import { pithas } from '../data/pithas';
import ProductCard from '../components/ui/ProductCard';
import SectionLabel from '../components/ui/SectionLabel';
import AlpanaMotif from '../components/ui/AlpanaMotif';
import { WaveDivider, ScallopDivider, AlpanaStripe } from '../components/ui/SectionDividers';
import { businessConfig } from '../config/business';
import { gradientContainerStyle, handleImgError } from '../utils/image';
import { useCart } from '../context/CartContext';

export default function Home() {
  const featured = getFeaturedProduct();
  const { addItem, openCart } = useCart();
  const { currency } = businessConfig;

  function handleAddFeatured() {
    if (featured) {
      addItem(featured, 1);
      openCart();
    }
  }

  return (
    <main className="bg-parchment overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* Decorative Organic Transition to Deep Forest */}
      <div className="-mt-1 text-forest">
        <WaveDivider className="text-forest" />
      </div>

      {/* 2. Heritage Storytelling & Sourcing (Rich Deep Forest Green) */}
      <section className="bg-forest text-parchment py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle background alpana watermark */}
        <div className="absolute top-0 right-0 w-96 h-96 text-parchment/5 pointer-events-none">
          <AlpanaMotif className="w-full h-full" variant="seal" />
        </div>

        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Story Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="bg-terracotta text-parchment-light px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest border border-forest-deep">
                  ঐতিহ্যের স্বাদ &bull; HERITAGE &amp; ORIGIN
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-black text-parchment leading-tight text-balance">
                Real winter pitha starts in the date palm groves of Jessore.
              </h2>

              <p className="text-parchment/80 text-base sm:text-lg leading-relaxed">
                Before dawn in rural Jessore, tree-tappers (<em>গাছি</em>) scale date palms to harvest the fresh morning sap. Simmered over earthen hearths, it turns into rich, smoky <strong>Khejur Gur</strong> with no added sugar syrups or chemicals.
              </p>

              <p className="text-parchment/80 text-base leading-relaxed">
                We pair this pure date palm jaggery with stone-milled fragrant <em>Atop</em> rice flour and fresh shredded coconut, sealed into neat kits ready for your steamer.
              </p>

              {/* Sourcing Pillars Strip */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-parchment/15">
                <div className="bg-parchment/10 rounded-2xl p-4 border border-parchment/15">
                  <span className="text-2xl block mb-2">🍯</span>
                  <p className="font-serif font-bold text-sm text-mustard">Pure Khejur Gur</p>
                  <p className="text-xs text-parchment/70 mt-1">Direct from Jessore tappers with smoky aroma.</p>
                </div>
                <div className="bg-parchment/10 rounded-2xl p-4 border border-parchment/15">
                  <span className="text-2xl block mb-2">🌾</span>
                  <p className="font-serif font-bold text-sm text-mustard">Stone-Milled Rice</p>
                  <p className="text-xs text-parchment/70 mt-1">Milled coarse on Thursdays for fluffy bhapa texture.</p>
                </div>
                <div className="bg-parchment/10 rounded-2xl p-4 border border-parchment/15">
                  <span className="text-2xl block mb-2">📜</span>
                  <p className="font-serif font-bold text-sm text-mustard">Fool-Proof Recipes</p>
                  <p className="text-xs text-parchment/70 mt-1">Exact water-to-flour ratios so your batch never fails.</p>
                </div>
              </div>
            </div>

            {/* Right Visual Composition with Overlapping Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Terracotta Decorative Backing */}
                <div className="absolute inset-0 bg-terracotta rounded-3xl translate-x-4 translate-y-4 -rotate-1 border-2 border-parchment/20" />
                
                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-parchment/40 shadow-rich bg-forest-deep aspect-[4/3]">
                  <img
                    src="/images/kits/winter-trio.webp"
                    alt="Authentic Bengali Pitha Preparation"
                    className="w-full h-full object-cover"
                    onError={handleImgError('subscription')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                    <span className="text-xs font-mono font-bold text-mustard uppercase tracking-widest">
                      TRADITIONAL WINTER SOLSTICE &bull; পৌষ পার্বণ
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold text-parchment mt-1">
                      From rustic clay steaming cups to your dinner table in Dhaka.
                    </p>
                  </div>
                </div>

                {/* Cultural Seal Badge */}
                <div className="absolute -bottom-6 -left-6 bg-mustard text-forest p-4 rounded-2xl border-2 border-forest shadow-stamp hidden sm:flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                    AUTHENTICITY SEAL
                  </span>
                  <span className="font-bengali font-bold text-sm text-forest mt-0.5">
                    ১০০% খাঁটি খেজুর গুড়
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Wave Transition into Muted Cream Showcase */}
      <div className="-mt-1 text-cream">
        <WaveDivider className="text-cream" />
      </div>

      {/* 3. Product Showcase: The Winter Trio Box (Muted Cream Background) */}
      {featured && (
        <section className="bg-cream py-16 lg:py-24 relative border-b-2 border-forest/15">
          <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Details */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="bg-forest text-mustard px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-wider border border-forest-deep">
                    FEATURED PARCEL &bull; বিশেষ বক্স
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-black text-forest leading-tight">
                  Inside the parcel:{' '}
                  <span className="italic font-normal text-terracotta">
                    Three pithas, one sweet box.
                  </span>
                </h2>

                <p className="text-forest/80 text-base leading-relaxed">
                  No wandering through five different grocery alleys. Everything is weighed, sealed, and verified. You only need drinking water, a pinch of salt, a splash of milk for the crêpes, and a steamer.
                </p>

                {/* Price and Cart Action Card */}
                <div className="bg-parchment rounded-2xl p-6 border-2 border-forest shadow-stamp flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-brown/70">
                      {featured.name} &bull; Serves {featured.servings}
                    </span>
                    <p className="font-serif text-3xl font-black text-forest mt-0.5">
                      {currency}{featured.price.toLocaleString()}
                      <span className="text-xs font-sans font-normal text-brown/70 ml-1">
                        / monthly box
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={handleAddFeatured}
                    className="bg-terracotta hover:bg-terracotta-deep text-parchment-light font-bold text-sm px-6 py-3.5 rounded-full border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
                  >
                    Add to Bag / ঝুড়িতে নিন &rarr;
                  </button>
                </div>

                <p className="text-xs text-forest/70 flex items-center gap-2 font-mono">
                  <span>📅</span>
                  <span>Orders close on the 25th each month. Delivered fresh for weekend gatherings.</span>
                </p>
              </div>

              {/* Right: The Kit Includes (Editorial Card List) */}
              <div className="lg:col-span-7">
                <div className="bg-parchment rounded-3xl p-8 sm:p-10 border-2 border-forest shadow-stamp-terra">
                  <div className="flex items-center justify-between pb-6 border-b-2 border-forest/10">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta">
                        PACK CONTENTS &bull; উপকরণের বিবরণ
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-forest mt-0.5">
                        What Arrives At Your Door
                      </h3>
                    </div>
                    <span className="bg-paddy/60 text-forest text-xs font-mono font-bold px-3 py-1 rounded-full border border-forest/20">
                      Pre-Portioned
                    </span>
                  </div>

                  <div className="divide-y-2 divide-forest/10 mt-2">
                    {featured.includes.map((inc, i) => (
                      <div
                        key={inc.item}
                        className="py-4 flex items-center justify-between gap-4 group hover:bg-cream px-4 -mx-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-sm font-black text-terracotta mt-0.5">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <h4 className="font-serif text-lg font-bold text-forest">
                              {inc.item}
                            </h4>
                            <p className="text-xs sm:text-sm text-brown/75 mt-0.5">
                              {inc.note}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-forest bg-forest/10 px-2.5 py-1 rounded-sm shrink-0">
                          SEALED
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-forest/10 bg-forest/5 p-4 rounded-xl flex items-center gap-3 text-xs text-forest">
                    <span className="text-xl">🫓</span>
                    <span>
                      Includes our water-resistant laminated recipe card with illustrated steps for first-time pitha makers.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. Three Lovely Ways to Pitha (Cultural Photography Gallery) */}
      <section className="bg-parchment py-20 lg:py-28 border-b-2 border-forest/15">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-terracotta text-parchment-light px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest">
                  স্বাদের বৈচিত্র্য &bull; CULINARY VARIETIES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-forest mt-3 text-balance">
                Three traditional winter classics.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-forest/70 max-w-md">
              Each pitha has its own traditional method, from steaming in layered muslin to rolling thin golden crêpes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pithas.map(({ id, name, subtitle, tagline, description, image }, i) => (
              <div
                key={id}
                className="bg-cream rounded-3xl border-2 border-forest shadow-stamp hover:-translate-y-2 hover:shadow-rich transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div
                  className="aspect-[4/3] w-full relative overflow-hidden border-b-2 border-forest bg-forest/10"
                  style={gradientContainerStyle()}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={handleImgError('pitha')}
                  />
                  <div className="absolute top-3 left-3 bg-forest text-mustard text-xs font-mono font-bold px-3 py-1 rounded-sm border border-mustard shadow-sm">
                    {`0${i + 1} / VARIETY`}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-black text-forest group-hover:text-terracotta transition-colors">
                      {name}{' '}
                      <span className="font-sans text-xs font-normal text-warm-gray block sm:inline">
                        &bull; {subtitle}
                      </span>
                    </h3>
                    <p className="text-xs font-bold text-terracotta uppercase tracking-wider mt-1">
                      {tagline}
                    </p>
                    <p className="text-sm text-forest/80 leading-relaxed mt-3">
                      {description}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-forest/10 flex items-center justify-between text-xs font-bold">
                    <span className="text-forest bg-paddy/30 px-2.5 py-1 rounded-sm">
                      Included in Trio Box
                    </span>
                    <Link
                      to="/our-story"
                      className="text-terracotta hover:text-terracotta-deep flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Recipe Card</span>
                      <span className="font-mono">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Pitha Post: Market Hassle vs Fresh Box */}
      <section className="bg-forest-deep text-parchment py-20 lg:py-28 border-b-2 border-forest">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="bg-mustard text-forest px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest">
              COMPARE THE EXPERIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-parchment mt-3 text-balance">
              Why Dhaka families order Pitha Post.
            </h2>
            <p className="text-parchment/70 text-base mt-3 leading-relaxed">
              We took everything frustrating about preparing winter pitha and solved it at the root.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Old Street Market Way */}
            <div className="bg-forest rounded-3xl p-8 border-2 border-parchment/15 opacity-80">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-terracotta block mb-2">
                TRADITIONAL ROADBLOCKS
              </span>
              <h3 className="font-serif text-2xl font-bold text-parchment mb-4">
                The 4-Market Run in Dhaka
              </h3>
              <ul className="space-y-3.5 text-sm text-parchment/70">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-bold text-base">&times;</span>
                  <span>Unreliable jaggery: most bazaar gur is diluted with cane sugar and soda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-bold text-base">&times;</span>
                  <span>Milling delays: finding a mill that grinds coarse Atop rice flour without overheating it is tough.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-bold text-base">&times;</span>
                  <span>Street pitha is cooked hours beforehand, wrapped in newspapers, and turns cold and soggy.</span>
                </li>
              </ul>
            </div>

            {/* The Pitha Post Parcel Way */}
            <div className="bg-cream text-forest rounded-3xl p-8 border-2 border-mustard shadow-stamp-mustard">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-forest/70 block mb-2">
                THE PITHA POST PROMISE
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest mb-4">
                The Monthly Box
              </h3>
              <ul className="space-y-3.5 text-sm text-forest/90">
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">✓</span>
                  <span><strong>Pure Jessore Nolen Gur:</strong> natural winter jaggery with deep caramel undertones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">✓</span>
                  <span><strong>Fresh Thursday Milling:</strong> balanced moisture content so your bhapa is cloud-soft, never hard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">✓</span>
                  <span><strong>Hot from your own stove:</strong> ready in about 30 minutes on weekend mornings.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Purchase Journey & Timeline (Alternating Muted Cream) */}
      <section className="bg-cream py-20 lg:py-28 border-b-2 border-forest/15">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="bg-terracotta text-parchment-light px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest">
                অর্ডার ও ডেলিভারি পদ্ধতি
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-forest mt-3 text-balance">
                The Postal Journey to Your Kitchen
              </h2>
            </div>
            <p className="text-sm text-forest/70 max-w-sm">
              From Jessore groves to weekend breakfast tables across Dhaka in 5 straightforward steps.
            </p>
          </div>

          {/* Timeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { n: '01', title: 'Choose Your Box', desc: 'Pick the 3-pitha Winter Trio, Bhapa Starter, or a One-Time Gift.', icon: '📦' },
              { n: '02', title: 'Enter Dhaka Address', desc: 'Provide neighborhood & phone. No passwords or cards needed.', icon: '📍' },
              { n: '03', title: 'WhatsApp Check-in', desc: 'A formatted order link opens WhatsApp. Confirm bKash or cash.', icon: '💬' },
              { n: '04', title: 'Fresh Batch Dispatch', desc: 'Ingredients packed and dispatched for weekend morning arrival.', icon: '🛵' },
              { n: '05', title: 'No Auto-Billing', desc: 'You choose when to order next month. We never bill automatically.', icon: '✨' },
            ].map((step) => (
              <div
                key={step.n}
                className="bg-parchment rounded-2xl p-6 border-2 border-forest shadow-stamp flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{step.icon}</span>
                    <span className="font-mono text-xs font-black bg-forest text-parchment px-2 py-0.5 rounded-sm">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-forest">
                    {step.title}
                  </h3>
                  <p className="text-xs text-forest/80 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-forest/10 text-[10px] font-mono text-terracotta font-bold uppercase">
                  Stage {step.n} of 05
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Expressive CTA Banner (Deep Forest Green Anchor with Mustard & Terracotta) */}
      <section className="bg-forest text-parchment-light py-20 lg:py-24 border-b-2 border-forest-deep">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="bg-mustard text-forest font-bold text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-sm inline-block mb-4">
              শীতের পিঠার আগমন &bull; WINTER DISPATCH OPEN
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-parchment leading-tight">
              Bring the warmth of Bengali winter into your home.
            </h2>
            <p className="text-parchment-light/80 text-base sm:text-lg leading-relaxed mt-4">
              Secure your monthly box before this month&rsquo;s 25th cutoff. Delivery across Dhanmondi, Gulshan, Uttara, Mirpur, and all Dhaka neighborhoods.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/boxes"
              className="bg-mustard hover:bg-mustard-light text-forest font-black text-base px-8 py-4 rounded-full border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer text-center"
            >
              Order This Month&rsquo;s Box &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
