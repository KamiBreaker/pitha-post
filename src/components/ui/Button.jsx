// Reusable button component
// variant: 'primary' | 'secondary' | 'ghost' | 'outline'
// size: 'sm' | 'md' | 'lg'

const VARIANTS = {
  primary:   'bg-forest text-cream hover:bg-forest-light active:scale-[0.98]',
  secondary: 'bg-cream text-forest border border-forest hover:bg-pale-green active:scale-[0.98]',
  ghost:     'text-forest hover:bg-pale-green active:scale-[0.98]',
  outline:   'border border-forest/30 text-forest hover:border-forest hover:bg-pale-green active:scale-[0.98]',
  gold:      'bg-gold text-white hover:bg-terracotta active:scale-[0.98]',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
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
        inline-flex items-center justify-center gap-2 font-sans font-medium
        rounded-full transition-all duration-150 cursor-pointer
        ${VARIANTS[variant]} ${SIZES[size]} ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  );
}
