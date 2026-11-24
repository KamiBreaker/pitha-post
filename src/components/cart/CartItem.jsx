import { useCart } from '../../context/CartContext';
import { businessConfig } from '../../config/business';
import { getProductById } from '../../data/products';
import { gradientContainerStyle, handleImgError } from '../../utils/image';

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();
  const { currency } = businessConfig;
  const product = getProductById(item.id);

  return (
    <div className="flex items-center gap-4 py-4 border-b-2 border-forest/10 last:border-0 group">
      {/* Product Thumbnail with Stamp Frame */}
      <div
        className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 border-forest bg-forest/10 relative shadow-sm"
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
        <h4 className="font-serif text-base font-bold text-forest truncate">
          {item.name}
        </h4>
        <p className="text-[11px] font-mono text-terracotta uppercase mt-0.5">
          {item.purchaseType === 'monthly' ? 'মাসিক কিট / Monthly' : 'এককালীন / One-Time'}
        </p>

        {/* Tactile Qty Counter */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQty(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
            className="w-6 h-6 rounded-md border-2 border-forest text-forest text-xs font-bold flex items-center justify-center bg-parchment-light hover:bg-mustard active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            &minus;
          </button>
          <span className="text-xs font-mono font-black text-forest w-5 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQty(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
            className="w-6 h-6 rounded-md border-2 border-forest text-forest text-xs font-bold flex items-center justify-center bg-parchment-light hover:bg-mustard active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end gap-1.5 shrink-0">
        <span className="font-serif text-base font-black text-forest">
          {currency}{(item.price * item.quantity).toLocaleString()}
        </span>
        <button
          onClick={() => removeItem(item.id)}
          className="text-[11px] font-mono font-bold text-terracotta hover:text-terracotta-deep transition-colors cursor-pointer"
        >
          Remove &times;
        </button>
      </div>
    </div>
  );
}
