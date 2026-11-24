import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const { clearCart, closeCart } = useCart();

  function handleDone() {
    clearCart();
    closeCart();
  }

  return (
    <div className="flex flex-col items-center text-center gap-6 py-4">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-pale-green flex items-center justify-center text-3xl">
        🫓
      </div>

      <div>
        <h3 className="font-serif text-xl font-semibold text-forest mb-2">
          Your order message is ready!
        </h3>
        <p className="text-sm text-warm-gray leading-relaxed">
          A WhatsApp chat with Pitha Post has opened. Send your message to confirm
          your kit, delivery fee, and payment details.
        </p>
      </div>

      {/* Steps */}
      <ol className="text-left w-full space-y-3">
        {[
          'Send the pre-filled message on WhatsApp.',
          "We'll confirm your kit and delivery fee.",
          'Arrange payment through bKash or cash.',
          'Your pitha box arrives within Dhaka.',
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-forest">
            <span className="w-5 h-5 rounded-full bg-forest text-cream text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="bg-peach rounded-xl p-3 text-xs text-terracotta w-full text-left">
        <strong>Remember:</strong> This subscription does not auto-renew.
        Place a fresh order each month before the 25th.
      </div>

      <Button variant="primary" size="md" className="w-full" onClick={handleDone}>
        Done
      </Button>
    </div>
  );
}
