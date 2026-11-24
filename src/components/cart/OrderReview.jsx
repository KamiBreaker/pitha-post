import { useCart } from '../../context/CartContext';
import { generateWhatsAppUrl, businessConfig } from '../../config/business';

export default function OrderReview() {
  const { items, customer, total, setStep } = useCart();
  const { currency } = businessConfig;

  const whatsappUrl = generateWhatsAppUrl({ items, customer, total });

  function handleConfirm() {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStep('confirmation');
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <span className="text-[10px] font-mono font-bold text-terracotta uppercase tracking-wider block mb-1">
          STEP 3 OF 3 &bull; চূড়ান্ত যাচাই
        </span>
        <h3 className="font-serif text-xl font-bold text-forest">Review your parcel</h3>
        <p className="text-xs text-forest/70 mt-1">
          Check your items and delivery destination before opening WhatsApp.
        </p>
      </div>

      {/* Items Summary Box */}
      <div className="bg-parchment-light rounded-2xl p-5 border-2 border-forest space-y-3 shadow-sm">
        <span className="text-[10px] font-mono font-bold uppercase text-terracotta tracking-wider block">
          ORDER SUMMARY
        </span>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center text-sm border-b border-forest/10 pb-2">
            <div>
              <span className="text-forest font-bold">{item.name}</span>
              <span className="text-xs font-mono text-warm-gray ml-2">&times; {item.quantity}</span>
            </div>
            <span className="text-forest font-serif font-black">{currency}{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className="pt-2 flex justify-between font-serif font-black text-lg text-forest">
          <span>Total</span>
          <span>{currency}{total.toLocaleString()}</span>
        </div>
      </div>

      {/* Delivery Recipient Box */}
      <div className="bg-parchment-light rounded-2xl p-5 border-2 border-forest space-y-1.5 text-xs">
        <span className="text-[10px] font-mono font-bold uppercase text-terracotta tracking-wider block mb-1">
          DELIVERY RECIPIENT &bull; প্রাপকের ঠিকানা
        </span>
        <p className="text-forest"><strong className="text-warm-gray">Name: </strong>{customer.name}</p>
        <p className="text-forest"><strong className="text-warm-gray">Phone: </strong>{customer.phone}</p>
        <p className="text-forest"><strong className="text-warm-gray">Area: </strong>{customer.area}</p>
        <p className="text-forest"><strong className="text-warm-gray">Address: </strong>{customer.address}</p>
      </div>

      {/* Manual Subscription Policy Pill */}
      <div className="bg-mustard/20 rounded-xl p-3.5 text-xs text-forest border border-mustard/60 leading-relaxed">
        <strong>Manual Renewal:</strong> This is a month-by-month order. Nothing will be charged automatically.
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setStep('form')}
          className="flex-1 py-3 px-4 rounded-full border-2 border-forest font-bold text-xs uppercase tracking-wider text-forest bg-parchment-light hover:bg-parchment transition-all cursor-pointer"
        >
          &larr; Edit Details
        </button>

        <button
          onClick={handleConfirm}
          className="flex-1 py-3 px-4 rounded-full border-2 border-forest font-bold text-xs uppercase tracking-wider text-parchment-light bg-[#25D366] hover:bg-[#20ba5a] text-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>Send via WhatsApp</span>
          <span className="font-mono">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
