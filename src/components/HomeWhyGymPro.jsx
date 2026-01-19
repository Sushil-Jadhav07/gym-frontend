import { motion as Motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { staggerContainer, cardVariant } from './MotionWrappers'
import { Activity, Handshake, ShieldCheck, LineChart } from 'lucide-react'

const whyUsItems = [
  {
    icon: <Activity className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />,
    title: 'Live Operational Overview',
    description: 'Monitor members, revenue, classes, and equipment from a single dashboard.',
  },
  {
    icon: <Handshake className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />,
    title: 'Built For Gym Teams',
    description: 'Simple for front desk, coaches, and owners to use without extra training.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />,
    title: 'Secure & Reliable',
    description: 'Modern, secure infrastructure so your member and payment data stays protected.',
  },
  {
    icon: <LineChart className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />,
    title: 'Grows With Your Gym',
    description: 'From single studios to multi-location facilities, GymPro scales with you.',
  },
]

function HomeWhyGymPro() {
  return (
    <Motion.section
      id="why"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="px-4 py-20"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionTitle
          eyebrow="Why GymPro"
          title="Why Gym Teams Choose Our Dashboard"
          description="Designed with gym owners, managers, and coaches so the admin work finally feels simple."
        />
        <Motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
          {whyUsItems.map(item => (
            <Motion.div
              key={item.title}
              variants={cardVariant}
              className="flex gap-4 rounded-2xl border border-emerald-500/10 bg-white p-5 shadow-md shadow-slate-200 dark:border-emerald-500/20 dark:bg-slate-900/70 dark:shadow-black/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </Motion.section>
  )
}

export default HomeWhyGymPro
