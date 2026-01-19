import { motion as Motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import IconCard from '../components/IconCard'
import CTAButton from '../components/CTAButton'
import { fadeUp, staggerContainer, cardVariant, pageVariant } from '../components/MotionWrappers'

const values = [
  {
    icon: '🏆',
    title: 'Performance First',
    description: 'We program for strength, durability, and long-term progress before aesthetics.',
  },
  {
    icon: '📚',
    title: 'Always Learning',
    description: 'Coaches stay current on training science and practical application.',
  },
  {
    icon: '🤝',
    title: 'No Ego Environment',
    description: 'Everyone started somewhere. We keep the focus on effort and respect.',
  },
  {
    icon: '🧠',
    title: 'Mind–Body Connection',
    description: 'We train your mindset as seriously as your technique and conditioning.',
  },
]

const trainers = [
  {
    name: 'Coach Mia',
    role: 'Strength & Powerlifting',
    bio: 'USAPL competitor specialized in building strength for beginners and intermediates.',
  },
  {
    name: 'Coach Malik',
    role: 'Conditioning & Fat Loss',
    bio: 'Blends conditioning and strength work for fast yet sustainable transformations.',
  },
  {
    name: 'Coach Elena',
    role: 'Athletic Performance',
    bio: 'Preps field and court athletes for speed, agility, and injury resilience.',
  },
]

function About() {
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
            About gamma
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Built for people who take their training seriously.
          </h1>
          <p className="max-w-3xl text-sm text-slate-400 md:text-base">
            Gamma was created for lifters and athletes who were tired of overcrowded commercial
            gyms and generic programs. Our focus is premium coaching, world-class equipment, and a
            community that expects more from itself.
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
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Our Story"
              title="From a small strength club to a full performance facility."
              align="left"
              description="gamma started as a small strength club training out of a single squat rack. Today, we are a full performance facility dedicated to strength, conditioning, and transformation."
            />
            <p className="text-sm text-slate-400 md:text-base">
              Every piece of equipment and every program is chosen with a purpose. Members come from all
              backgrounds, but they all share one thing: a commitment to showing up and doing the work.
            </p>
          </div>
          <Motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-6 shadow-[0_24px_90px_rgba(6,95,70,0.6)]"
          >
            <p className="text-sm text-emerald-100">
              “We did not build gamma to be the biggest gym in the city. We built it to be the most
              intentional place to train.”
            </p>
            <p className="mt-4 text-xs text-emerald-300">Founder, Gamma</p>
          </Motion.div>
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
            eyebrow="Values"
            title="What We Stand For"
            description="Our training philosophy is rooted in intent, effort, and long-term thinking. These values shape everything we do inside the gym."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(value => (
              <IconCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
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
            eyebrow="Coaching Team"
            title="Trainers Who Live This Lifestyle"
            description="Our coaches walk the same path as our members. They train, compete, and study so they can guide you with clarity and experience."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {trainers.map(trainer => (
              <Motion.div
                key={trainer.name}
                variants={cardVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-5 text-sm"
              >
                <div className="space-y-3">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-500/40 to-slate-900" />
                  <div>
                    <h3 className="text-base font-semibold text-slate-50">{trainer.name}</h3>
                    <p className="text-xs text-emerald-300">{trainer.role}</p>
                  </div>
                  <p className="text-slate-400">{trainer.bio}</p>
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  Available for personal coaching and program design.
                </p>
              </Motion.div>
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
        className="px-4 pb-24 pt-10"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionTitle
            eyebrow="Facility"
            title="A Space Designed For Serious Training"
            description="From comp-grade racks to turf and sleds, every corner of gamma is built to support your training, not distract from it."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <IconCard
              icon="🧱"
              title="Strength Zone"
              description="Competition racks, calibrated plates, specialty bars, and dedicated deadlift platforms."
            />
            <IconCard
              icon="🏃"
              title="Conditioning Zone"
              description="Sled track, ski ergs, rowers, assault bikes, and open space for movement work."
            />
            <IconCard
              icon="🧘"
              title="Recovery Corner"
              description="Soft tissue tools, mobility stations, and quiet space to reset after hard sessions."
            />
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
            Ready to see what you are capable of with the right environment?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100 md:text-base">
            Book a free tour and assessment. Walk the floor, meet the coaches, and leave with a clear
            plan for your next training block.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton onClick={() => (window.location.href = '/contact')}>Book A Visit</CTAButton>
          </div>
        </div>
      </Motion.section>
    </Motion.main>
  )
}

export default About
