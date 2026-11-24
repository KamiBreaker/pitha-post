import { useState } from 'react';

const FAQS = [
  {
    q: "What comes in the Winter Trio kit?",
    a: "The Winter Trio includes stone-milled fragrant Atop rice flour, pure unadulterated Jessore Khejur Gur (date palm jaggery), freshly grated and sealed coconut, and our illustrated keepsake recipe card covering Bhapa, Patishapta, and Puli. One kit generously serves six people.",
  },
  {
    q: "Is this suitable for complete beginners?",
    a: "Yes, 100%! We specifically designed Pitha Post so you don't need years of culinary intuition. The recipe card specifies the exact water-to-flour ratio, resting time, and steaming techniques.",
  },
  {
    q: "How does the manual monthly subscription work?",
    a: "Nothing auto-renews or bills without your permission. Before the 25th of each month, we send you a WhatsApp check-in. You confirm your order, customize quantities, or pause for the month. We only pack and dispatch after you say yes.",
  },
  {
    q: "Where in Dhaka do you deliver?",
    a: "We deliver across all Dhaka neighborhoods including Dhanmondi, Gulshan, Banani, Uttara, Mirpur, Bashundhara, Mohakhali, and Old Dhaka. Deliveries are batched for Friday and Saturday mornings.",
  },
  {
    q: "Can I skip a month or pause?",
    a: "Yes, anytime. Since there is zero automated recurring charge on your card, skipping is as simple as replying 'pause' or placing no order for that month.",
  },
  {
    q: "How is payment handled?",
    a: "Payment and the local delivery fee are coordinated directly through WhatsApp after your order is submitted on the website. We accept bKash and cash on delivery.",
  },
  {
    q: "How pure is the date palm jaggery (Khejur Gur)?",
    a: "We source our jaggery directly from trusted date palm tappers (গাছি) in Jessore. It is 100% natural, unadulterated, and free from industrial sugar syrup, artificial coloring, or soda.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-forest/10 py-5 transition-colors">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group"
      >
        <span className="font-serif text-lg font-bold text-forest group-hover:text-terracotta transition-colors">
          {q}
        </span>
        <span className={`w-7 h-7 rounded-full border-2 border-forest flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-all ${
          open ? 'bg-forest text-parchment' : 'bg-parchment text-forest group-hover:bg-mustard'
        }`}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="mt-3.5 text-sm text-forest/80 leading-relaxed pr-6 bg-parchment/60 p-4 rounded-xl border border-forest/10 animate-fadeIn">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="divide-y-2 divide-transparent">
      {FAQS.map((item) => (
        <FAQItem key={item.q} {...item} />
      ))}
    </div>
  );
}
