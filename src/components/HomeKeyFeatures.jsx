import { motion as Motion } from 'framer-motion'
import { TrendingUp, Calendar, Activity } from 'lucide-react'
import { staggerContainer, fadeUp } from './MotionWrappers'
import SectionTitle from './SectionTitle'

const features = [
  {
    title: 'Growth at a glance',
    description: 'Track member growth, retention, and revenue trends without leaving the dashboard.',
    icon: <TrendingUp className="h-6 w-6 text-white" />,
  },
  {
    title: 'Smart scheduling',
    description: 'See how classes are filling up so you can adjust capacity in real time.',
    icon: <Calendar className="h-6 w-6 text-white" />,
  },
  {
    title: 'Operations overview',
    description: 'Monitor equipment status and activity to keep your gym running smoothly.',
    icon: <Activity className="h-6 w-6 text-white" />,
  },
]

function HomeKeyFeatures() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      {/* Decorative background blur */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px] dark:bg-emerald-500/10" />

      {/* Dot Pattern Background */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 dark:opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_center,black_0%,transparent_80%)]" />
      </div>

      <Motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionTitle
            eyebrow="Key Features"
            title="Everything in One View"
            description="Manage your entire gym ecosystem from a single, powerful dashboard designed for growth."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/50 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-black/40 dark:hover:border-emerald-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-emerald-500/40">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-50">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  )
}

export default HomeKeyFeatures
