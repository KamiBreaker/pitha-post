import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getFeaturedProduct } from '../../data/products';
import { businessConfig } from '../../config/business';
import { gradientContainerStyle, handleImgError } from '../../utils/image';
import AlpanaMotif from '../ui/AlpanaMotif';

export default function Hero() {
  const featured = getFeaturedProduct();
  const { addItem, openCart } = useCart();
  const { currency } = businessConfig;

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
              Authentic <strong>Bhapa, Patishapta, and Puli</strong> kits &mdash; packed with farm-tapped Jessore date palm jaggery, coarse stone-ground rice flour, and illustrated step cards. <em>Serves six around the table.</em>
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

          {/* Right Column: Immersive Overlapping Editorial Spread */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Layered Accent Frame behind photo */}
              <div className="absolute inset-0 bg-terracotta rounded-3xl translate-x-3 translate-y-3 -rotate-1 border-2 border-forest" />
              
              {/* Main Photo Card Container */}
              <div
                className="relative rounded-3xl overflow-hidden border-2 border-forest bg-forest shadow-elevation aspect-[4/3] sm:aspect-[1/1] transition-transform duration-500 group-hover:-translate-y-1"
                style={gradientContainerStyle()}
              >
                <img
                  src={featured?.image || '/images/kits/winter-trio.webp'}
                  alt={featured?.name || 'Winter Trio Bengali Pitha Kit'}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={handleImgError('subscription')}
                />

                {/* Postage Stamp Sticker (Top Left) */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-mustard text-forest p-3 sm:p-4 rounded-2xl border-2 border-forest shadow-stamp transform -rotate-3 group-hover:rotate-0 transition-transform select-none">
                  <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-forest/70">
                    MONTHLY KIT &bull; মাসিক বক্স
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-black text-forest leading-none">
                    {currency}{featured?.price?.toLocaleString() || '1,150'}
                  </span>
                  <span className="block text-[10px] font-bengali font-bold text-terracotta mt-0.5">
                    ৬ জনের ভোজ
                  </span>
                </div>

                {/* Cultural Seal Pill (Bottom Right) */}
                <div className="absolute bottom-4 right-4 bg-forest/90 backdrop-blur-md text-parchment px-4 py-2 rounded-full border border-mustard/40 flex items-center gap-2 text-xs font-mono shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-mustard animate-pulse" />
                  <span>LIMITED DHAKA BATCHES</span>
                </div>
              </div>

              {/* Caption Under Photo */}
              <div className="mt-5 flex justify-between items-center px-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-paddy" />
                  <span className="text-xs font-mono font-bold uppercase text-forest tracking-wider">
                    {featured?.name || 'The Winter Trio'} &bull; ভাপা &bull; পাটিসাপটা &bull; পুলি
                  </span>
                </div>
                <span className="font-serif italic text-xs text-terracotta font-bold">
                  Serves 6 people
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
