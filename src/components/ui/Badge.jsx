const STYLES = {
  popular:      'bg-mustard text-forest border-2 border-forest',
  gift:         'bg-terracotta text-parchment-light border-2 border-forest',
  'one-time':   'bg-parchment-light text-forest border-2 border-forest',
  subscription: 'bg-forest text-parchment border-2 border-forest-deep',
  default:      'bg-parchment text-forest border-2 border-forest/30',
};

export default function Badge({ label, variant = 'default', className = '' }) {
  if (!label) return null;
  const style = STYLES[variant] ?? STYLES.default;
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm shadow-sm ${style} ${className}`}
    >
      {label}
    </span>
  );
}
