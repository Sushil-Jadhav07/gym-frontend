import { motion as Motion } from 'framer-motion'
import { cardVariant } from './MotionWrappers'

function IconCard({ icon, title, description, className = '' }) {
  return (
    <Motion.div
      variants={cardVariant}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-5 shadow-lg shadow-black/40 ${className}`}
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xl">
        <span>{icon}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-50">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </Motion.div>
  )
}

export default IconCard
