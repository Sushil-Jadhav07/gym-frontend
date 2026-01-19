import { motion as Motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { staggerContainer, cardVariant } from './MotionWrappers'

function HomeResults() {
  return (
    <Motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="px-4 pb-12 pt-4"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <SectionTitle
          eyebrow="Results"
          title="Gyms That Simplified Their Admin"
          description="From independent studios to multi-location gyms, teams use GymPro to keep operations clear and predictable."
        />
        <Motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
          <Motion.div
            variants={cardVariant}
            className="flex flex-col justify-between rounded-2xl border border-emerald-500/10 bg-white p-5 text-sm text-slate-700 shadow-md shadow-slate-200 dark:border-emerald-500/20 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-black/40"
          >
            <p className="mb-4 text-slate-800 dark:text-slate-200">
              “We moved our operations into GymPro and cut admin time by almost half. The team finally
              has one place to manage everything.”
            </p>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-300">Alex Rivera</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Gym Owner</p>
            </div>
          </Motion.div>
          <Motion.div
            variants={cardVariant}
            className="flex flex-col justify-between rounded-2xl border border-emerald-500/10 bg-white p-5 text-sm text-slate-700 shadow-md shadow-slate-200 dark:border-emerald-500/20 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-black/40"
          >
            <p className="mb-4 text-slate-800 dark:text-slate-200">
              “Classes, payments, and member messages all flow through one system now. The dashboard
              tells me exactly what needs attention today.”
            </p>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-300">Jordan Lee</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Operations Manager</p>
            </div>
          </Motion.div>
          <Motion.div
            variants={cardVariant}
            className="flex flex-col justify-between rounded-2xl border border-emerald-500/10 bg-white p-5 text-sm text-slate-700 shadow-md shadow-slate-200 dark:border-emerald-500/20 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-black/40"
          >
            <p className="mb-4 text-slate-800 dark:text-slate-200">
              “GymPro gives me clear numbers on each site. I can see revenue, active members, and class
              load without chasing spreadsheets.”
            </p>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-300">Taylor Morgan</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Multi-location Franchise Lead</p>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </Motion.section>
  )
}

export default HomeResults
