import { useCart } from '../../context/CartContext';
import { generateWhatsAppUrl, businessConfig } from '../../config/business';
import Button from '../ui/Button';

export default function OrderReview() {
  const { items, customer, total, setStep, clearCart } = useCart();
  const { currency } = businessConfig;

  const whatsappUrl = generateWhatsAppUrl({ items, customer, total });

  function handleConfirm() {
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    // Move to confirmation screen
    setStep('confirmation');
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="font-serif text-lg font-semibold text-forest">Review your order</h3>
        <p className="text-xs text-warm-gray mt-1">Check everything before we prepare your WhatsApp message.</p>
      </div>

      {/* Items */}
      <div className="bg-pale-green rounded-xl p-4 space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-forest font-medium">{item.name} × {item.quantity}</span>
            <span className="text-forest font-serif">{currency}{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className="pt-2 border-t border-forest/10 flex justify-between font-serif font-semibold text-forest">
          <span>Monthly total</span>
          <span>{currency}{total.toLocaleString()}/mo</span>
        </div>
      </div>

      {/* Delivery */}
      <div className="text-sm space-y-1">
        <p className="section-label mb-2">Delivery details</p>
        <p className="text-forest"><span className="text-warm-gray">Name: </span>{customer.name}</p>
        <p className="text-forest"><span className="text-warm-gray">Phone: </span>{customer.phone}</p>
        <p className="text-forest"><span className="text-warm-gray">Area: </span>{customer.area}</p>
        <p className="text-forest"><span className="text-warm-gray">Address: </span>{customer.address}</p>
      </div>

      {/* Policy note */}
      <div className="bg-peach rounded-xl p-3 text-xs text-terracotta leading-relaxed">
        <strong>Manual subscription.</strong> This order does not auto-renew.
        You'll need to place a new order each month before the {businessConfig.orderCutoffDay}th.
      </div>

      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => setStep('form')}>
          ← Edit
        </Button>
        <Button variant="primary" size="sm" className="flex-1 bg-green-700 hover:bg-green-800" onClick={handleConfirm}>
          Order via WhatsApp →
        </Button>
      </div>
    </div>
  );
}
