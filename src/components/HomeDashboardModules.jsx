import { motion as Motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import CTAButton from './CTAButton'
import { staggerContainer, cardVariant } from './MotionWrappers'

const servicesPreview = [
  {
    title: 'Members & Profiles',
    description: 'Track member details, plans, attendance, and lifetime value in one view.',
  },
  {
    title: 'Classes & Timetables',
    description: 'Plan weekly schedules, manage capacity, and keep every class organized.',
  },
  {
    title: 'Staff & Permissions',
    description: 'Give coaches and admins the exact access they need across locations.',
  },
  {
    title: 'Payments & Analytics',
    description: 'Connect billing and reporting so you can see revenue trends instantly.',
  },
]

function HomeDashboardModules({ scrollToSection }) {
  return (
    <Motion.section
      id="programs"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="px-4 py-20"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Dashboard Modules"
            title="Overview Of Key Screens"
            align="left"
            description="From member lists to revenue reports, GymPro keeps every core workflow a click away."
          />
          <CTAButton
            variant="outline"
            className="mt-2"
            onClick={() => scrollToSection('programs')}
          >
            Explore Modules
          </CTAButton>
        </div>
        <Motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {servicesPreview.map(card => (
            <Motion.div
              key={card.title}
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-emerald-500/10 bg-white p-5 text-sm text-slate-700 shadow-lg shadow-slate-200 dark:border-emerald-500/20 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-black/40"
            >
              <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-50">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{card.description}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </Motion.section>
  )
}

export default HomeDashboardModules
