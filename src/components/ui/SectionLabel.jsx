// Small all-caps section eyebrow label
export default function SectionLabel({ children, className = '', light = false }) {
  return (
    <p
      className={`section-label ${light ? 'text-cream/50' : 'text-warm-gray'} ${className}`}
    >
      {children}
    </p>
  );
}
