// Authentic Bengali Alpana & Cultural Geometric Motif SVG Component
export default function AlpanaMotif({ className = "w-6 h-6 text-terracotta", variant = "flower" }) {
  if (variant === "border") {
    return (
      <svg viewBox="0 0 120 20" fill="currentColor" className={className} preserveAspectRatio="none">
        <path d="M0,10 Q15,0 30,10 T60,10 T90,10 T120,10 Q105,20 90,10 T60,10 T30,10 T0,10 Z" opacity="0.6"/>
        <circle cx="15" cy="10" r="2.5"/>
        <circle cx="45" cy="10" r="2.5"/>
        <circle cx="75" cy="10" r="2.5"/>
        <circle cx="105" cy="10" r="2.5"/>
      </svg>
    );
  }

  if (variant === "seal") {
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
        <circle cx="50" cy="50" r="46" strokeWidth="2.5" strokeDasharray="3 3"/>
        <circle cx="50" cy="50" r="40" strokeWidth="1.5"/>
        <path d="M50 20 L55 35 L70 35 L58 45 L62 60 L50 50 L38 60 L42 45 L30 35 L45 35 Z" fill="currentColor" opacity="0.85"/>
        <circle cx="50" cy="50" r="6" fill="#F5E7D0"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M20,2 C22,10 30,18 38,20 C30,22 22,30 20,38 C18,30 10,22 2,20 C10,18 18,10 20,2 Z" opacity="0.9"/>
      <circle cx="20" cy="20" r="4" fill="#F5E7D0"/>
    </svg>
  );
}
