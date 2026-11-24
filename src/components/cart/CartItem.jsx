import { useCart } from '../../context/CartContext';
import { businessConfig } from '../../config/business';
import { getProductById } from '../../data/products';
import { gradientContainerStyle, handleImgError } from '../../utils/image';

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();
  const { currency } = businessConfig;
  const product = getProductById(item.id);

  return (
    <div className="flex items-center gap-3.5 py-4 border-b border-forest/10 last:border-0 group">
      {/* Product Thumbnail */}
      <div
        className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-forest/10 bg-pale-green relative"
        style={gradientContainerStyle()}
      >
        {product?.image && (
          <img
            src={product.image}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={handleImgError(product.category)}
          />
        )}
      </div>

      {/* Info & Quantity */}
      <div className="flex-1 min-w-0">
        <h4 className="font-serif text-sm font-bold text-forest truncate">
          {item.name}
        </h4>
        <p className="text-[11px] text-warm-gray mt-0.5">
          {item.purchaseType === 'monthly' ? 'Monthly kit' : 'One-time gift'}
        </p>

        {/* Qty counter */}
        <div className="flex items-center gap-2.5 mt-2">
          <button
            onClick={() => updateQty(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
            className="w-6 h-6 rounded-full border border-forest/20 text-forest text-sm font-semibold flex items-center justify-center hover:bg-pale-green active:scale-95 transition-all"
          >
            &minus;
          </button>
          <span className="text-xs font-semibold text-forest w-4 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQty(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
            className="w-6 h-6 rounded-full border border-forest/20 text-forest text-sm font-semibold flex items-center justify-center hover:bg-pale-green active:scale-95 transition-all"
          >
            +
          </button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className="font-serif text-sm font-bold text-forest">
          {currency}{(item.price * item.quantity).toLocaleString()}
        </span>
        <button
          onClick={() => removeItem(item.id)}
          className="text-[11px] text-warm-gray hover:text-terracotta underline decoration-transparent hover:decoration-terracotta transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
