import { motion as Motion } from 'framer-motion'

function CTAButton({ children, className = '', variant = 'primary', ...rest }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-semibold tracking-wide transition-colors'
  const styles =
    variant === 'outline'
      ? 'border border-emerald-400/80 text-emerald-300 hover:bg-emerald-500/10'
      : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'

  return (
    <Motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {children}
    </Motion.button>
  )
}

export default CTAButton
