import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { availableProducts, getFeaturedProduct } from '../../data/products';
import { businessConfig } from '../../config/business';
import { gradientContainerStyle, handleImgError } from '../../utils/image';
import AlpanaMotif from '../ui/AlpanaMotif';

export default function Hero() {
  const featured = getFeaturedProduct();
  const slides = availableProducts.length ? availableProducts : [featured].filter(Boolean);
  const initialIndex = Math.max(0, slides.findIndex((p) => p.featured));
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isPaused, setIsPaused] = useState(false);

  const { addItem, openCart } = useCart();
  const { currency } = businessConfig;

  const current = slides[activeIndex] || featured;

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  function handlePrev(e) {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function handleNext(e) {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }

  function handleGetKit() {
    if (featured) addItem(featured, 1);
    openCart();
  }

  return (
    <section className="relative bg-parchment overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Traditional Alpana motifs in background */}
      <div className="absolute -top-16 -right-16 w-80 h-80 text-terracotta/10 pointer-events-none select-none">
        <AlpanaMotif className="w-full h-full" variant="seal" />
      </div>
      <div className="absolute bottom-4 left-4 w-40 h-40 text-forest/5 pointer-events-none select-none">
        <AlpanaMotif className="w-full h-full" variant="flower" />
      </div>

      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Expressive Editorial Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 z-10">

            {/* Cultural Dispatch Stamp */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-forest text-mustard px-3.5 py-1.5 rounded-sm text-xs font-mono font-bold uppercase tracking-widest border border-forest-deep shadow-sm flex items-center gap-1.5">
                <AlpanaMotif className="w-3.5 h-3.5 text-mustard" />
                DAC POSTAL SERVICE &bull; WINTER 2026
              </span>
              <span className="font-bengali text-xs font-bold text-terracotta bg-terracotta/10 px-3.5 py-1.5 rounded-sm border border-terracotta/20">
                পৌষের পিঠা উৎসব &bull; ঘরে তৈরি হোক স্মৃতি
              </span>
            </div>

            {/* Oversized Expressive Headline with Editorial Rhythm */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-black text-forest leading-[1.06] tracking-tight">
                Taste the winter ritual.
              </h1>
              <div className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal italic text-terracotta leading-[1.08]">
                Authentic Bengali pithas,
              </div>
              <div className="font-serif text-4xl sm:text-6xl xl:text-7xl font-black text-forest leading-[1.06] tracking-tight">
                delivered raw &amp; fresh.
              </div>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-forest/85 text-base sm:text-xl font-sans leading-relaxed max-w-xl">
              Fresh <strong>Bhapa, Patishapta, Malpoa, Pakon, and more</strong> kits packed with Jessore date palm jaggery, stone-ground rice flour, and illustrated step cards.
            </p>

            {/* Contrasting Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleGetKit}
                className="inline-flex items-center justify-center gap-3 bg-terracotta hover:bg-terracotta-deep text-parchment-light font-bold text-base px-8 py-4 rounded-full border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer group"
              >
                <span>Claim This Month&rsquo;s Trio</span>
                <span className="group-hover:translate-x-1 transition-transform font-mono">&rarr;</span>
              </button>

              <Link
                to="/boxes"
                className="inline-flex items-center justify-center gap-2 bg-cream hover:bg-mustard/20 text-forest font-bold text-sm px-7 py-4 rounded-full border-2 border-forest shadow-sm hover:shadow-stamp transition-all"
              >
                <span>Browse All Kits / পিঠার বাক্স</span>
                <span className="text-terracotta font-mono">&darr;</span>
              </Link>
            </div>

            {/* Heritage Sourcing & Trust Strip */}
            <div className="pt-4 border-t-2 border-forest/10 grid grid-cols-3 gap-3 max-w-lg">
              <div className="bg-cream border-2 border-forest/15 rounded-xl p-3 shadow-sm">
                <span className="block text-[10px] font-mono uppercase text-brown/70 font-bold">Origin</span>
                <span className="font-serif font-bold text-xs sm:text-sm text-forest">Jessore Khejur Gur</span>
              </div>
              <div className="bg-cream border-2 border-forest/15 rounded-xl p-3 shadow-sm">
                <span className="block text-[10px] font-mono uppercase text-brown/70 font-bold">Flour</span>
                <span className="font-serif font-bold text-xs sm:text-sm text-forest">Stone-Ground Atop</span>
              </div>
              <div className="bg-cream border-2 border-forest/15 rounded-xl p-3 shadow-sm">
                <span className="block text-[10px] font-mono uppercase text-brown/70 font-bold">Policy</span>
                <span className="font-serif font-bold text-xs sm:text-sm text-terracotta">Zero Auto-Renew</span>
              </div>
            </div>

          </div>

          {/* Right Column: Auto-Sliding Interactive Package Showcase */}
          <div
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="group">
              <div className="relative">
                {/* Layered Accent Frame behind photo */}
                <div className="absolute inset-0 bg-terracotta rounded-3xl translate-x-3 translate-y-3 -rotate-1 border-2 border-forest" />

                {/* Clickable Main Photo Card Container -> leads to /boxes */}
                <Link
                  to="/boxes"
                  aria-label={`View ${current?.name || 'pitha packages'} in Kits & Boxes`}
                  className="block relative rounded-3xl overflow-hidden border-2 border-forest bg-forest shadow-elevation aspect-[4/3] sm:aspect-[1/1] transition-transform duration-500 group-hover:-translate-y-1 cursor-pointer"
                  style={gradientContainerStyle()}
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={current?.id || activeIndex}
                      src={current?.image || '/images/kits/winter-trio.webp'}
                      alt={current?.name || 'Bengali Pitha Kit'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      onError={handleImgError(current?.category || 'subscription')}
                    />
                  </AnimatePresence>

                  {/* Subtle bottom gradient for controls readability */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest-deep/70 via-forest-deep/20 to-transparent pointer-events-none" />

                  {/* Postage Stamp Sticker (Top Left) */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-mustard text-forest p-3 sm:p-4 rounded-2xl border-2 border-forest shadow-stamp transform -rotate-3 group-hover:rotate-0 transition-transform select-none z-10">
                    <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-forest/70">
                      {current?.purchaseType === 'one-time'
                        ? 'GIFT BOX • উপহার বক্স'
                        : 'MONTHLY KIT • মাসিক বক্স'}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-black text-forest leading-none">
                      {currency}{current?.price?.toLocaleString() || '1,150'}
                    </span>
                    <span className="block text-[10px] font-bengali font-bold text-terracotta mt-0.5">
                      {current?.servings ? `${current.servings} জনের ভোজ` : 'উপহারের বক্স'}
                    </span>
                  </div>

                  {/* Prev / Next Controls */}
                  {slides.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous package"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-cream/90 hover:bg-mustard text-forest border-2 border-forest shadow-sm flex items-center justify-center font-mono font-bold text-sm transition-colors cursor-pointer"
                      >
                        &larr;
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next package"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-cream/90 hover:bg-mustard text-forest border-2 border-forest shadow-sm flex items-center justify-center font-mono font-bold text-sm transition-colors cursor-pointer"
                      >
                        &rarr;
                      </button>
                    </>
                  )}

                  {/* Cultural Seal Pill (Bottom Right) */}
                  <div className="absolute bottom-4 right-4 z-10 bg-forest/90 backdrop-blur-md text-parchment px-4 py-2 rounded-full border border-mustard/40 flex items-center gap-2 text-xs font-mono shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-mustard animate-pulse" />
                    <span>VIEW ALL KITS &rarr;</span>
                  </div>
                </Link>
              </div>

              {/* Caption & Slider Dots Under Photo */}
              <div className="mt-6 flex flex-wrap justify-between items-center gap-2 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-paddy shrink-0" />
                  <Link
                    to="/boxes"
                    className="text-xs font-mono font-bold uppercase text-forest hover:text-terracotta tracking-wider transition-colors"
                  >
                    {current?.name || 'The Winter Trio'} &bull; {(current?.pithas || []).join(' • ')}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  {slides.length > 1 && (
                    <div className="flex items-center gap-1.5" role="tablist" aria-label="Select package preview">
                      {slides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Show ${slide.name}`}
                          aria-selected={idx === activeIndex}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            idx === activeIndex
                              ? 'w-5 bg-terracotta'
                              : 'w-2 bg-forest/30 hover:bg-forest/60'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  <span className="font-serif italic text-xs text-terracotta font-bold">
                    {current?.servings ? `Serves ${current.servings} people` : 'Gift Box'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
