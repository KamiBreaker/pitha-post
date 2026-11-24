import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { businessConfig } from '../../config/business';
import { gradientContainerStyle, handleImgError } from '../../utils/image';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

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

  return (
    <article
      className={`
        relative flex flex-col rounded-3xl border overflow-hidden
        transition-all duration-300 hover:-translate-y-1 hover:shadow-lift group
        ${isFeatured
          ? 'bg-cream border-gold/40 shadow-soft ring-1 ring-gold/30'
          : 'bg-cream border-forest/10 shadow-soft'
        }
      `}
    >
      {/* Product Image Container */}
      <div
        className="aspect-[4/3] w-full relative overflow-hidden bg-pale-green"
        style={gradientContainerStyle()}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={handleImgError(product.category)}
        />

        {/* Badges — Top Left */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
          {product.badge && (
            <Badge
              label={product.badge}
              variant={product.badge === 'Most Popular' ? 'popular' : 'gift'}
            />
          )}
          <Badge
            label={product.purchaseType === 'monthly' ? 'Monthly' : 'One-time'}
            variant={product.purchaseType === 'monthly' ? 'subscription' : 'one-time'}
          />
        </div>

        {/* Price Pill — Bottom Right */}
        <div className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full text-sm font-serif font-bold bg-cream/95 text-forest shadow-md border border-forest/10 backdrop-blur-sm">
          {currency}{product.price.toLocaleString()}
          <span className="text-[11px] font-sans font-normal text-warm-gray ml-1">
            {product.purchaseType === 'monthly' ? '/mo' : ''}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 gap-5 justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl font-bold text-forest">
              {product.name}
            </h3>
            {product.servings && (
              <span className="text-xs font-sans font-medium text-forest-muted bg-pale-green px-2.5 py-0.5 rounded-full shrink-0">
                Serves {product.servings}
              </span>
            )}
          </div>

          <p className="text-xs font-medium text-terracotta mt-1">
            {product.tagline}
          </p>

          <p className="text-sm text-warm-gray leading-relaxed mt-2.5">
            {product.description}
          </p>

          {/* Kit contents listing */}
          <div className="mt-4 pt-4 border-t border-forest/10">
            <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-warm-gray mb-2">
              Inside this box:
            </p>
            <ul className="text-xs text-warm-gray space-y-1.5">
              {product.includes.map((inc) => (
                <li key={inc.item} className="flex items-start gap-2">
                  <span className="text-gold font-bold mt-0.5">&bull;</span>
                  <span>
                    <strong className="text-forest font-medium">{inc.item}</strong>
                    {inc.note && <span className="text-warm-gray-light"> &mdash; {inc.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="pt-2">
          <Button
            onClick={handleAdd}
            variant={isFeatured ? 'primary' : 'outline'}
            size="md"
            className="w-full justify-center shadow-sm"
          >
            {added
              ? '✓ Added to bag'
              : `Add to bag \u2014 ${currency}${product.price.toLocaleString()}`
            }
          </Button>
        </div>
      </div>
    </article>
  );
}
