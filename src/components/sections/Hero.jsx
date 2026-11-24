import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getFeaturedProduct } from '../../data/products';
import { businessConfig } from '../../config/business';
import { gradientContainerStyle, handleImgError } from '../../utils/image';
import Button from '../ui/Button';

export default function Hero() {
  const featured = getFeaturedProduct();
  const { addItem, openCart } = useCart();
  const { currency } = businessConfig;

  function handleGetKit() {
    if (featured) addItem(featured, 1);
    openCart();
  }

  return (
    <section className="bg-cream border-b border-forest/10 overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Editorial Story & Value Prop */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-label uppercase text-warm-gray">
              <span className="text-gold text-sm">✦</span>
              <span>A pitha day, made easy</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest leading-[1.12] text-balance">
              Three winter pithas,{' '}
              <em className="font-serif italic font-normal text-forest-muted block sm:inline">
                made at home.
              </em>
            </h1>

            <p className="text-warm-gray text-base sm:text-lg leading-relaxed max-w-xl">
              Bhapa, patishapta, and puli &mdash; with rice flour, khejur gur, coconut,
              and recipes. One kit serves six around the table.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleGetKit}
                className="shadow-soft hover:shadow-lift"
              >
                Get this month&rsquo;s kit &rarr;
              </Button>
              <Link
                to="/boxes"
                className="inline-flex items-center justify-center gap-2 text-sm font-sans font-medium text-forest hover:text-forest-light px-5 py-3 transition-colors group"
              >
                <span>See all boxes</span>
                <span className="group-hover:translate-x-1 transition-transform">&darr;</span>
              </Link>
            </div>

            <div className="pt-2 border-t border-forest/10 flex items-center gap-3 text-xs text-warm-gray">
              <span className="w-6 h-6 rounded-full bg-pale-green text-forest flex items-center justify-center text-xs shrink-0">
                🌿
              </span>
              <span>
                <strong>Made for sharing.</strong> One monthly kit serves six. Orders ship in Dhaka with zero auto-renewal.
              </span>
            </div>
          </div>

          {/* Right Column — Large Editorial Photography */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Product Photograph Container */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-lift border border-forest/10 aspect-[4/3] sm:aspect-[16/12] transition-transform duration-500 group-hover:scale-[1.01]"
                style={gradientContainerStyle()}
              >
                <img
                  src={featured?.image || '/images/kits/winter-trio.webp'}
                  alt={featured?.name || 'Three winter pithas kit'}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={handleImgError('subscription')}
                />

                {/* Circular artisanal sticker badge (as in Lovable demo) */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold text-forest shadow-float flex flex-col items-center justify-center text-center p-2 border-2 border-cream/80 backdrop-blur-sm select-none transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-wider text-forest/80">
                    per month
                  </span>
                  <span className="font-serif text-base sm:text-lg font-bold text-forest leading-none mt-0.5">
                    {currency}{featured?.price?.toLocaleString() || '1,150'}
                  </span>
                </div>
              </div>

              {/* Photo Caption Strip */}
              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[11px] font-sans font-semibold text-warm-gray uppercase tracking-label">
                  {featured?.name || 'The Winter Trio'}
                </span>
                <span className="text-xs font-serif italic text-warm-gray">
                  Bhapa &middot; patishapta &middot; puli
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
