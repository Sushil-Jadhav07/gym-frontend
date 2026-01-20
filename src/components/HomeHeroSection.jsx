import { motion as Motion } from 'framer-motion'
import CTAButton from './CTAButton'
import { fadeUp, staggerContainer } from './MotionWrappers'

function HomeHeroSection({ scrollToSection }) {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-28 md:pt-32">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-40 dark:opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_top_right,black_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-6"
        >
          <Motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400"
          >
            Gym Management Dashboard
          </Motion.p>
          <Motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50"
          >
            Run your gym.
            <br />
            One powerful admin dashboard.
          </Motion.h1>
          <Motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl text-sm text-slate-600 md:text-base dark:text-slate-400"
          >
            gamma connects members, classes, staff, payments, and analytics in a single
            clean dashboard so you always know what is happening at your gym.
          </Motion.p>
          <Motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4"
          >
            <CTAButton onClick={() => scrollToSection('book')}>Book Live Demo</CTAButton>
            <CTAButton
              variant="outline"
              className="backdrop-blur"
              onClick={() => scrollToSection('programs')}
            >
              View Features
            </CTAButton>
          </Motion.div>
          <Motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-4 grid gap-4 text-xs text-slate-600 sm:grid-cols-3 dark:text-slate-400"
          >
            <div className="rounded-xl border border-emerald-500/10 bg-slate-100 px-4 py-3 dark:border-emerald-500/20 dark:bg-slate-900/60">
              <p className="text-emerald-600 dark:text-emerald-300">Certified Trainers</p>
              <p>Coaches with real-world lifting and coaching experience.</p>
            </div>
            <div className="rounded-xl border border-emerald-500/10 bg-slate-100 px-4 py-3 dark:border-emerald-500/20 dark:bg-slate-900/60">
              <p className="text-emerald-600 dark:text-emerald-300">Modern Equipment</p>
              <p>Competition racks, calibrated plates, and conditioning tools.</p>
            </div>
            <div className="rounded-xl border border-emerald-500/10 bg-slate-100 px-4 py-3 dark:border-emerald-500/20 dark:bg-slate-900/60">
              <p className="text-emerald-600 dark:text-emerald-300">Progress Tracking</p>
              <p>Every session is logged, measured, and optimized.</p>
            </div>
          </Motion.div>
        </Motion.div>

        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-emerald-400/10 bg-white p-6 shadow-[0_24px_90px_rgba(15,23,42,0.25)] dark:border-emerald-400/20 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-[0_24px_90px_rgba(15,23,42,0.9)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                Dashboard Snapshot
              </p>
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                See the numbers that matter as soon as you log in: members, classes, revenue, and
                equipment status.
              </p>
              <div className="mt-6 space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-900/80">
                  <span>Total Members</span>
                  <span className="text-emerald-300">1,234</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-900/80">
                  <span>Active Classes</span>
                  <span className="text-emerald-300">48</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-900/80">
                  <span>Monthly Revenue</span>
                  <span className="text-emerald-300">$45,231</span>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default HomeHeroSection
