import { useCart } from '../../context/CartContext';

const FIELDS = [
  { key: 'name',    label: 'Your Name / আপনার নাম',         type: 'text',  placeholder: 'Full name',               required: true },
  { key: 'phone',   label: 'Phone Number / মোবাইল নম্বর',   type: 'tel',   placeholder: '01XXXXXXXXX (WhatsApp)',  required: true },
  { key: 'area',    label: 'Area / এলাকা (Dhaka)',           type: 'text',  placeholder: 'e.g. Dhanmondi, Gulshan, Uttara', required: true },
  { key: 'address', label: 'Delivery Address / পূর্ণ ঠিকানা', type: 'text',  placeholder: 'House, road, sector and landmark', required: true },
];

export default function OrderForm() {
  const { customer, setCustomer, setStep } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    setStep('review');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <span className="text-[10px] font-mono font-bold text-terracotta uppercase tracking-wider block mb-1">
          STEP 2 OF 3 &bull; ঠিকানা প্রদান
        </span>
        <h3 className="font-serif text-xl font-bold text-forest">
          Where should this month&rsquo;s kit go?
        </h3>
        <p className="text-xs text-forest/70 mt-1">
          These details are formatted directly into your WhatsApp order message.
        </p>
      </div>

      <div className="space-y-4">
        {FIELDS.map(({ key, label, type, placeholder, required }) => (
          <div key={key} className="flex flex-col gap-1">
            <label className="text-xs font-mono font-bold text-forest uppercase">
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              value={customer[key]}
              required={required}
              onChange={(e) => setCustomer({ [key]: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-forest/30 bg-parchment-light text-sm text-forest placeholder:text-warm-gray/60 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition font-sans"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-3">
        <button
          type="button"
          onClick={() => setStep('cart')}
          className="flex-1 py-3 px-4 rounded-full border-2 border-forest font-bold text-xs uppercase tracking-wider text-forest bg-parchment-light hover:bg-parchment transition-all cursor-pointer"
        >
          &larr; Back to Bag
        </button>

        <button
          type="submit"
          className="flex-1 py-3 px-4 rounded-full border-2 border-forest font-bold text-xs uppercase tracking-wider text-parchment-light bg-terracotta hover:bg-terracotta-deep shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
        >
          Review Order &rarr;
        </button>
      </div>

      <p className="text-[11px] text-forest/60 text-center font-mono">
        Zero payment is charged on this website. All orders confirmed in WhatsApp.
      </p>
    </form>
  );
}
