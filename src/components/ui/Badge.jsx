// Small label badge — e.g. "Most Popular", "Gift", "One-time"
const STYLES = {
  popular:  'bg-gold/15 text-gold border border-gold/30',
  gift:     'bg-peach text-terracotta border border-terracotta/30',
  'one-time': 'bg-pale-green text-forest-muted border border-forest/20',
  subscription: 'bg-pale-green text-forest-muted border border-forest/20',
  default:  'bg-cream text-warm-gray border border-warm-gray/30',
};

export default function Badge({ label, variant = 'default', className = '' }) {
  if (!label) return null;
  const style = STYLES[variant] ?? STYLES.default;
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-sans font-medium rounded-full ${style} ${className}`}
    >
      {label}
    </span>
  );
}
