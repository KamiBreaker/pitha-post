import { useState } from 'react';

const FAQS = [
  {
    q: "What comes in the Winter Trio?",
    a: "The Winter Trio includes rice flour, khejur gur (date palm jaggery), coconut, and a three-pitha recipe card covering bhapa, patishapta and puli — step by step. The kit serves six people.",
  },
  {
    q: "Is it beginner-friendly?",
    a: "Absolutely. The recipe card is written for first-time pitha makers. Each step is simple and the ingredients are pre-measured, so you just follow along.",
  },
  {
    q: "How do monthly orders work?",
    a: "Nothing renews automatically. Each month, you place a fresh order through WhatsApp before the 25th. We confirm your kit, delivery fee, and payment details there.",
  },
  {
    q: "What is the delivery area?",
    a: "We currently deliver within Dhaka only. Boxes ship in small weekly batches. Exact delivery timing is confirmed with each order via WhatsApp.",
  },
  {
    q: "Can I skip a month?",
    a: "Yes — since there is no auto-renewal, simply do not place an order that month. You can resume whenever you are ready.",
  },
  {
    q: "Does the kit contain coconut?",
    a: "Yes. Coconut is part of the filling for all three pithas and is included in every kit. Please note this if you have a coconut allergy.",
  },
  {
    q: "What is Gift a Box?",
    a: "Gift a Box is a one-time purchase (৳900) — perfect for sending the warmth of winter pitha to family or friends. It does not start a subscription.",
  },
  {
    q: "How do I pay?",
    a: "Payment and delivery fees are arranged through WhatsApp after you submit your order details. We accept bKash and cash on delivery.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest/10 py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <span className="font-serif text-base font-medium text-forest">{q}</span>
        <span className="text-warm-gray text-lg shrink-0 mt-0.5">
          {open ? '\u2212' : '+'}
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-warm-gray leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section>
      <div className="max-w-2xl">
        {FAQS.map((item) => (
          <FAQItem key={item.q} {...item} />
        ))}
      </div>
    </section>
  );
}
