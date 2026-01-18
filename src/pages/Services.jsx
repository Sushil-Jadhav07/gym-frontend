import { motion as Motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import IconCard from '../components/IconCard'
import CTAButton from '../components/CTAButton'
import { fadeUp, staggerContainer, cardVariant, pageVariant } from '../components/MotionWrappers'

const services = [
  {
    icon: '🏋️',
    title: '1:1 Strength Coaching',
    description: 'Weekly coached sessions focused on compound lifts, technique, and long-term strength.',
  },
  {
    icon: '🔥',
    title: 'Fat Loss Accelerator',
    description: 'Hybrid strength and conditioning blocks paired with nutrition guidance for visible change.',
  },
  {
    icon: '👥',
    title: 'Small Group Training',
    description: 'Train with up to six lifters under one coach for energy and accountability.',
  },
  {
    icon: '🎯',
    title: 'Performance Prep',
    description: 'Off-season and in-season programming for field, court, and combat athletes.',
  },
  {
    icon: '🧘',
    title: 'Mobility & Recovery',
    description: 'Guided mobility classes to unlock positions and keep joints healthy.',
  },
  {
    icon: '🥗',
    title: 'Nutrition Coaching',
    description: 'Macro guidance, habit coaching, and check-ins to match your training cycles.',
  },
  {
    icon: '📊',
    title: 'Strength Testing Days',
    description: 'Structured testing to retest maxes, speed, and conditioning benchmarks.',
  },
  {
    icon: '💻',
    title: 'Remote Coaching',
    description: 'Online programming with video feedback for lifters outside the city.',
  },
]

const memberships = [
  {
    name: 'Foundation',
    price: '$89 / mo',
    description: 'For self-directed lifters who want premium equipment and environment.',
    features: ['Unlimited gym access', 'Intro technique session', 'Monthly progress check-in'],
  },
  {
    name: 'Coached',
    price: '$189 / mo',
    description: 'Guided training with weekly coached sessions and structured programming.',
    features: [
      '2x coached sessions per week',
      'Personalized training plan',
      'Progress tracking dashboard',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$289 / mo',
    description: 'For lifters and athletes who want full accountability and oversight.',
    features: [
      '3x coached sessions per week',
      'Custom nutrition guidance',
      'Priority coach messaging',
    ],
  },
]

function Services() {
  return (
    <Motion.main
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-slate-950 text-slate-50"
    >
      <section className="px-4 pb-16 pt-28 md:pt-32">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-6xl space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Services
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Coaching and memberships built around how you actually live.
          </h1>
          <p className="max-w-3xl text-sm text-slate-400 md:text-base">
            Choose from flexible memberships, focused coaching, or full transformation packages. Every
            option is designed to get you stronger, leaner, and more confident.
          </p>
        </Motion.div>
      </section>

      <Motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-4 py-20"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionTitle
            eyebrow="Services"
            title="Choose The Training Format That Fits You"
            description="From one-on-one coaching to small group sessions and remote programs, there is an approach that fits your season of life."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(service => (
              <IconCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </Motion.section>

      <Motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-4 py-20"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionTitle
            eyebrow="Memberships"
            title="Membership Plans"
            description="Every plan includes access to elite equipment, community, and the structure you need to keep progressing."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {memberships.map(membership => (
              <Motion.div
                key={membership.name}
                variants={cardVariant}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`flex flex-col justify-between rounded-2xl border bg-slate-900/70 p-6 text-sm shadow-lg shadow-black/50 ${
                  membership.highlighted
                    ? 'border-emerald-500/80 ring-2 ring-emerald-500/30'
                    : 'border-emerald-500/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-slate-50">{membership.name}</h3>
                      <p className="text-xs text-emerald-300">{membership.price}</p>
                    </div>
                    {membership.highlighted ? (
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Most Popular
                      </span>
                    ) : null}
                  </div>
                  <p className="text-slate-400">{membership.description}</p>
                  <ul className="space-y-2 text-slate-300">
                    {membership.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2 text-xs">
                        <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <CTAButton className="mt-6 w-full justify-center">Start Plan</CTAButton>
              </Motion.div>
            ))}
          </div>
        </div>
      </Motion.section>

      <Motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-4 pb-24"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-slate-950 px-6 py-10 text-center shadow-[0_24px_90px_rgba(6,95,70,0.6)] md:px-10 md:py-14">
          <h3 className="text-2xl font-semibold md:text-3xl">
            Not sure which option fits best? Let us help.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100 md:text-base">
            Share your goals and training history. We will recommend the membership or coaching track
            that gives you the fastest, most sustainable results.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton onClick={() => (window.location.href = '/contact')}>
              Talk To A Coach
            </CTAButton>
          </div>
        </div>
      </Motion.section>
    </Motion.main>
  )
}

export default Services
