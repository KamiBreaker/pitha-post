// Decorative SVG Separators for Organic Section Transitions
export function ScallopDivider({ className = "text-parchment", flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        className={`relative block w-full h-8 sm:h-12 ${className}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}

export function WaveDivider({ className = "text-forest", flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        className={`relative block w-full h-8 sm:h-14 ${className}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.31,191,105.9,235.63,94.48,279.16,73.49,321.39,56.44Z" />
      </svg>
    </div>
  );
}

export function AlpanaStripe({ className = "text-terracotta" }) {
  return (
    <div className="w-full flex items-center justify-center gap-3 py-2 overflow-hidden select-none opacity-60">
      <span className="h-px bg-current flex-1" />
      <span className={`text-xs font-mono font-bold tracking-widest ${className}`}>
        ✦ ❖ ✦ ❖ ✦
      </span>
      <span className="h-px bg-current flex-1" />
    </div>
  );
}
