import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { businessConfig } from '../../config/business';
import { gradientContainerStyle, handleImgError } from '../../utils/image';
import AlpanaMotif from './AlpanaMotif';

export default function ProductCard({ product, variant = 'default' }) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);
  const { currency } = businessConfig;

  if (!product.available) return null;

  function handleAdd() {
    addItem(product, 1);
    openCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const isFeatured = variant === 'featured' || product.featured;
  const isGift = product.category === 'gift';

  return (
    <article
      className={`
        relative flex flex-col rounded-3xl border-2 border-forest overflow-hidden transition-all duration-300 group
        ${isFeatured
          ? 'bg-cream shadow-stamp-terra ring-2 ring-terracotta/40'
          : isGift
          ? 'bg-cream shadow-stamp'
          : 'bg-cream shadow-stamp'
        }
        hover:-translate-y-1.5 hover:shadow-rich
      `}
    >
      {/* Product Image Header */}
      <div
        className="aspect-[16/11] w-full relative overflow-hidden bg-forest/10 border-b-2 border-forest"
        style={gradientContainerStyle()}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={handleImgError(product.category)}
        />

        {/* Badges Overlay */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10 items-start">
          {product.badge && (
            <span className="bg-mustard text-forest text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border border-forest shadow-sm flex items-center gap-1">
              <AlpanaMotif className="w-2.5 h-2.5 text-forest" />
              {product.badge}
            </span>
          )}
          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm border border-forest shadow-sm ${
            product.purchaseType === 'monthly'
              ? 'bg-forest text-parchment'
              : 'bg-terracotta text-parchment-light'
          }`}>
            {product.purchaseType === 'monthly' ? 'মাসিক কিট / Monthly' : 'এককালীন / One-Time'}
          </span>
        </div>

        {/* Price Stamp (Bottom Right) */}
        <div className="absolute bottom-3.5 right-3.5 bg-parchment-light text-forest px-4 py-1.5 rounded-xl border-2 border-forest shadow-sm font-serif font-black text-lg sm:text-xl flex items-baseline gap-1 select-none">
          <span>{currency}{product.price.toLocaleString()}</span>
          <span className="text-[10px] font-sans font-normal text-warm-gray">
            {product.purchaseType === 'monthly' ? '/mo' : ''}
          </span>
        </div>
      </div>

      {/* Product Body: Spacing & Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-8 gap-5 justify-between">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-serif text-2xl font-black text-forest group-hover:text-terracotta transition-colors leading-tight">
                {product.name}
              </h3>
              <p className="text-xs font-semibold text-terracotta tracking-wide mt-1">
                {product.tagline}
              </p>
            </div>

            {product.servings && (
              <span className="bg-paddy/30 text-forest text-xs font-mono font-bold px-3 py-1 rounded-full border border-forest/20 shrink-0">
                Serves {product.servings}
              </span>
            )}
          </div>

          <p className="text-sm text-forest/80 leading-relaxed pt-1">
            {product.description}
          </p>

          {/* Clean Ingredient Pills (Replaces the dense cluttered table) */}
          <div className="pt-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-forest/60 block mb-2">
              Inside this box:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.includes.map((inc) => (
                <span
                  key={inc.item}
                  className="bg-parchment border border-forest/15 px-2.5 py-1 rounded-md text-xs text-forest/90 font-medium"
                >
                  {inc.item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Add to Bag Action */}
        <div className="pt-3 border-t border-forest/10">
          <button
            onClick={handleAdd}
            className={`
              w-full py-3.5 px-6 rounded-full font-bold text-sm tracking-wide border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2
              ${isFeatured
                ? 'bg-terracotta text-parchment-light hover:bg-terracotta-deep'
                : 'bg-mustard text-forest hover:bg-mustard-light'
              }
            `}
          >
            {added ? (
              <span>✓ Added to Bag / ঝুলিতে যোগ হয়েছে</span>
            ) : (
              <>
                <span>Add to Bag</span>
                <span className="font-serif">&bull; {currency}{product.price.toLocaleString()}</span>
                <span className="font-mono">&rarr;</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
