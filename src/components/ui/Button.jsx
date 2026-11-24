import { motion } from 'framer-motion';

const VARIANTS = {
  primary:   'bg-terracotta hover:bg-terracotta-deep text-parchment-light border-2 border-forest shadow-stamp active:shadow-none',
  secondary: 'bg-mustard hover:bg-mustard-light text-forest border-2 border-forest shadow-stamp active:shadow-none',
  forest:    'bg-forest hover:bg-forest-light text-parchment border-2 border-forest-deep shadow-stamp active:shadow-none',
  outline:   'border-2 border-forest text-forest bg-parchment-light hover:bg-parchment',
  ghost:     'text-forest hover:text-terracotta',
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
  const Component = Tag === 'button' ? motion.button : Tag;
  const motionProps = Tag === 'button' ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  } : {};

  return (
    <Component
      {...motionProps}
      className={`
        inline-flex items-center justify-center gap-2 font-sans rounded-full transition-colors cursor-pointer select-none
        ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
