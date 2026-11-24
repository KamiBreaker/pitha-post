// Modern Bengali Heritage Tactile Button
const VARIANTS = {
  primary:   'bg-terracotta hover:bg-terracotta-deep text-parchment-light border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
  secondary: 'bg-mustard hover:bg-mustard-light text-forest border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
  forest:    'bg-forest hover:bg-forest-light text-parchment border-2 border-forest-deep shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
  outline:   'border-2 border-forest text-forest bg-parchment-light hover:bg-parchment active:translate-x-0.5 active:translate-y-0.5',
  ghost:     'text-forest hover:text-terracotta active:scale-95',
};

const SIZES = {
  sm: 'px-4 py-2 text-xs font-mono uppercase tracking-wider',
  md: 'px-6 py-3 text-sm font-bold',
  lg: 'px-8 py-4 text-base font-bold',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`
        inline-flex items-center justify-center gap-2 font-sans rounded-full transition-all duration-150 cursor-pointer
        ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  );
}
