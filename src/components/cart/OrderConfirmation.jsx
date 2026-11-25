import { useCart } from '../../context/CartContext';
import { generateWhatsAppUrl } from '../../config/business';

export default function OrderConfirmation() {
  const { items, customer, total, clearCart, closeCart } = useCart();
  const whatsappUrl = generateWhatsAppUrl({ items, customer, total });

  function handleDone() {
    clearCart();
    closeCart();
  }

  return (
    <div className="flex flex-col items-center text-center gap-6 py-4">
      {/* Postage Seal Icon */}
      <div className="w-20 h-20 rounded-full bg-forest text-mustard flex items-center justify-center text-3xl border-2 border-forest shadow-stamp-terra">
        🫓
      </div>

      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-terracotta block mb-1">
          DISPATCH INITIALIZED &bull; অর্ডার বার্তা প্রস্তুত
        </span>
        <h3 className="font-serif text-2xl font-black text-forest">
          Your WhatsApp message is ready!
        </h3>
        <p className="text-xs sm:text-sm text-forest/80 leading-relaxed mt-2 max-w-xs">
          A dedicated WhatsApp chat with Pitha Post has opened in your browser. Send your pre-filled message to confirm your delivery time and payment preference.
        </p>
      </div>

      {/* Next Steps List */}
      <ol className="text-left w-full space-y-2.5 bg-parchment-light rounded-2xl p-5 border-2 border-forest/15 shadow-sm text-xs text-forest">
        {[
          'Send the formatted message on WhatsApp.',
          'We will confirm your delivery slot and local fee.',
          'Arrange payment via bKash or Cash on Delivery.',
          'Fresh ingredients arrive at your doorstep in Dhaka.',
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-md bg-forest text-parchment font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="leading-snug">{step}</span>
          </li>
        ))}
      </ol>

      <div className="bg-mustard/20 rounded-xl p-3.5 text-xs text-forest border border-mustard/60 w-full text-left">
        <strong>Remember:</strong> This subscription never auto-renews. You decide when to confirm next month&rsquo;s delivery.
      </div>

      <div className="w-full flex flex-col gap-2.5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-terracotta hover:bg-terracotta-deep text-parchment-light border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-center"
        >
          Open WhatsApp Chat &rarr;
        </a>

        <button
          onClick={handleDone}
          className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-forest hover:bg-forest-light text-parchment border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
        >
          Done / সম্পন্ন
        </button>
      </div>
    </div>
  );
}
