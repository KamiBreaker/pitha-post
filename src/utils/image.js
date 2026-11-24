// ─── Image Asset Utilities ────────────────────────────────────────────────────
// Centralises all image path resolution and fallback logic.
// When a product image is unavailable, the system degrades gracefully through:
//   1. The product's own image path
//   2. A category-level fallback image
//   3. A CSS gradient fallback (always works, no network request)
//
// Image folder convention (all under /public/images/):
//   /images/brand/        – logo, hero banner, general brand assets
//   /images/kits/         – complete kit/product photography
//   /images/pitha/        – individual pitha variety photography
//   /images/ingredients/  – ingredient close-ups

/** CSS gradient used when no image is available at all */
export const GRADIENT_FALLBACK =
  'linear-gradient(135deg, #EDF0E6 0%, #F7F4EE 50%, #FAEEE3 100%)';

/** Category-level fallback images (shown if product image 404s) */
const CATEGORY_FALLBACKS = {
  subscription: '/images/brand/kit-fallback.webp',
  gift:         '/images/brand/gift-fallback.webp',
  seasonal:     '/images/brand/seasonal-fallback.webp',
  pitha:        '/images/brand/pitha-fallback.webp',
  ingredients:  '/images/brand/ingredient-fallback.webp',
  _default:     null, // triggers gradient fallback
};

/**
 * Returns the category-level fallback src, or null if none configured.
 * @param {string} category
 * @returns {string|null}
 */
export function getCategoryFallback(category) {
  return CATEGORY_FALLBACKS[category] ?? CATEGORY_FALLBACKS._default;
}

/**
 * React img onError handler factory.
 * First error → tries category fallback. Second error → hides the img element
 * so the parent's CSS gradient background shows through.
 *
 * Usage:
 *   <img src={product.image} onError={handleImgError(product.category)} />
 *
 * @param {string} category
 * @returns {(e: React.SyntheticEvent) => void}
 */
export function handleImgError(category) {
  return (e) => {
    const img = e.currentTarget;
    const fallback = getCategoryFallback(category);

    if (fallback && img.src !== window.location.origin + fallback) {
      // First failure — try category fallback
      img.src = fallback;
    } else {
      // Second failure — hide img and let CSS gradient show
      img.style.display = 'none';
    }
  };
}

/**
 * Returns inline style for a container that shows a gradient background.
 * The <img> inside renders on top; if it fails, the gradient shows through.
 */
export function gradientContainerStyle() {
  return { background: GRADIENT_FALLBACK };
}
