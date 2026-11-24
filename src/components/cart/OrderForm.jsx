import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const FIELDS = [
  { key: 'name',    label: 'Your name',         type: 'text',  placeholder: 'Full name',               required: true },
  { key: 'phone',   label: 'Phone number',       type: 'tel',   placeholder: '01XXXXXXXXX',             required: true },
  { key: 'area',    label: 'Area or neighbourhood', type: 'text', placeholder: 'e.g. Dhanmondi, Gulshan', required: true },
  { key: 'address', label: 'Delivery address',   type: 'text',  placeholder: 'House, road and landmark', required: true },
];

export default function OrderForm() {
  const { customer, setCustomer, setStep, items } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    setStep('review');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h3 className="font-serif text-lg font-semibold text-forest">Where should this month's kit go?</h3>
        <p className="text-xs text-warm-gray mt-1">
          Your details will be included in your WhatsApp order message.
        </p>
      </div>

      {FIELDS.map(({ key, label, type, placeholder, required }) => (
        <div key={key} className="flex flex-col gap-1">
          <label className="text-xs font-medium text-forest/80">{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            value={customer[key]}
            required={required}
            onChange={(e) => setCustomer({ [key]: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-sm text-forest placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/40 transition"
          />
        </div>
      ))}

      <div className="flex gap-3 mt-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => setStep('cart')}
        >
          ← Back
        </Button>
        <Button type="submit" variant="primary" size="sm" className="flex-1">
          Review order →
        </Button>
      </div>

      <p className="text-xs text-warm-gray/70 text-center">
        No payment is collected here. Your order is confirmed through WhatsApp.
      </p>
    </form>
  );
}
