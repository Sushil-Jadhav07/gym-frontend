import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  Dumbbell,
  Flame,
  Target,
  Users,
  Salad,
  StretchHorizontal,
  ShieldCheck,
  LineChart,
  Handshake,
  BarChart3,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import IconCard from '../components/IconCard'
import CTAButton from '../components/CTAButton'
import { fadeUp, staggerContainer, cardVariant, pageVariant } from '../components/MotionWrappers'

const featureCards = [
  {
    icon: <Dumbbell className="h-6 w-6 text-emerald-300" />,
    title: 'Strength Training',
    description: 'Periodized barbell and accessory work to build dense, functional muscle.',
  },
  {
    icon: <Flame className="h-6 w-6 text-emerald-300" />,
    title: 'Fat Loss Programs',
    description: 'Hybrid strength and conditioning protocols to drop fat without losing strength.',
  },
  {
    icon: <Target className="h-6 w-6 text-emerald-300" />,
    title: 'Personal Coaching',
    description: 'One-on-one coaching with expert trainers who program for your real life.',
  },
  {
    icon: <Users className="h-6 w-6 text-emerald-300" />,
    title: 'Group Classes',
    description: 'High-energy classes focused on strength, conditioning, and athleticism.',
  },
  {
    icon: <Salad className="h-6 w-6 text-emerald-300" />,
    title: 'Nutrition Guidance',
    description: 'Practical nutrition systems that fit your lifestyle and training phase.',
  },
  {
    icon: <StretchHorizontal className="h-6 w-6 text-emerald-300" />,
    title: 'Mobility & Recovery',
    description: 'Dedicated mobility sessions and recovery protocols to keep you injury-free.',
  },
]

const servicesPreview = [
  {
    title: 'Elite Strength Coaching',
    description: 'Custom programs built around your squat, bench, and deadlift progressions.',
  },
  {
    title: 'Metabolic Conditioning',
    description: 'Engineered intervals that torch fat while preserving lean mass.',
  },
  {
    title: 'Athlete Development',
    description: 'Speed, power, and agility training for field and court athletes.',
  },
  {
    title: 'Transformation Programs',
    description: '12-week systems designed for visible, sustainable physique changes.',
  },
]

const whyUsItems = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-300" />,
    title: 'Certified Expert Trainers',
    description: 'Coaches with real strength backgrounds, not just weekend certifications.',
  },
  {
    icon: <LineChart className="h-6 w-6 text-emerald-300" />,
    title: 'Personalized Workout Plans',
    description: 'Every program is customized based on goals, training history, and lifestyle.',
  },
  {
    icon: <Handshake className="h-6 w-6 text-emerald-300" />,
    title: 'Supportive Gym Community',
    description: 'Train alongside focused lifters who push, support, and celebrate progress.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-emerald-300" />,
    title: 'Measurable Results',
    description: 'We track every lift, metric, and milestone so you see tangible progress.',
  },
]

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Lost 14kg, gained strength',
    quote:
      'I came in for fat loss and ended up hitting personal records on my lifts. The structure, coaching, and community at Ironcore are unmatched.',
  },
  {
    name: 'Jordan Lee',
    role: 'Busy professional',
    quote:
      'The coaches built a program around my schedule, not the other way around. Three focused sessions a week changed everything for me.',
  },
  {
    name: 'Taylor Morgan',
    role: 'Competitive athlete',
    quote:
      'Ironcore dialed in my strength, speed, and recovery. I feel more explosive and confident every time I compete.',
  },
]

function Home() {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    goal: '',
  })

  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookingChange = event => {
    const { name, value } = event.target
    setBookingForm(prev => ({ ...prev, [name]: value }))
  }

  const handleBookingSubmit = event => {
    event.preventDefault()
    console.log('Book Now form submitted:', bookingForm)
  }

  return (
    <Motion.main
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-slate-950 text-slate-50"
    >
      <section id="top" className="px-4 pb-20 pt-28 md:pt-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6"
          >
            <Motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400"
            >
              Performance Driven Training
            </Motion.p>
            <Motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
            >
              Train Smarter.
              <br />
              Get Stronger.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Transform Faster.
              </span>
            </Motion.h1>
            <Motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-xl text-sm text-slate-400 md:text-base"
            >
              Ironcore Gym combines strength training, fat loss systems, and expert coaching so you can
              build a stronger, leaner body without wasting hours on random workouts.
            </Motion.p>
            <Motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4"
            >
              <CTAButton onClick={() => scrollToSection('book')}>Book Free Trial</CTAButton>
              <CTAButton
                variant="outline"
                className="backdrop-blur"
                onClick={() => scrollToSection('programs')}
              >
                View Programs
              </CTAButton>
            </Motion.div>
            <Motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-4 grid gap-4 text-xs text-slate-400 sm:grid-cols-3"
            >
              <div className="rounded-xl border border-emerald-500/20 bg-slate-900/60 px-4 py-3">
                <p className="text-emerald-300">Certified Trainers</p>
                <p>Coaches with real-world lifting and coaching experience.</p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-slate-900/60 px-4 py-3">
                <p className="text-emerald-300">Modern Equipment</p>
                <p>Competition racks, calibrated plates, and conditioning tools.</p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-slate-900/60 px-4 py-3">
                <p className="text-emerald-300">Progress Tracking</p>
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
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-emerald-400/10 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.9)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  Ironcore Sessions
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  Structured training blocks with clear weekly progression so you know exactly what to
                  do every time you step into the gym.
                </p>
                <div className="mt-6 space-y-3 text-xs text-slate-400">
                  <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                    <span>Strength Blocks</span>
                    <span className="text-emerald-300">4–6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                    <span>Conditioning Focus</span>
                    <span className="text-emerald-300">2–3 sessions/week</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                    <span>Coach Check-ins</span>
                    <span className="text-emerald-300">Weekly</span>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
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
            eyebrow="Training Pillars"
            title="Everything You Need Under One Roof"
            description="Six focused pillars that cover strength, conditioning, recovery, and the habits that keep you progressing month after month."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map(card => (
              <IconCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Motion.section>

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
              eyebrow="Programs"
              title="Preview Our Signature Services"
              align="left"
              description="Whether you are just starting, chasing new personal records, or returning after a break, there is a track built for you."
            />
            <CTAButton
              variant="outline"
              className="mt-2"
              onClick={() => scrollToSection('programs')}
            >
              Explore All Services
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
                className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-5 text-sm text-slate-300 shadow-lg shadow-black/40"
              >
                <h3 className="mb-2 text-base font-semibold text-slate-50">{card.title}</h3>
                <p className="text-slate-400">{card.description}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Motion.section>

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
            eyebrow="Why Ironcore"
            title="Why Lifters Choose Us And Stay"
            description="More than a room full of equipment. Ironcore is a coaching-first environment built around long-term progress."
          />
          <Motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
            {whyUsItems.map(item => (
              <Motion.div
                key={item.title}
                variants={cardVariant}
                className="flex gap-4 rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Motion.section>

      <Motion.section
        id="book"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-4 py-20"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-emerald-400/5 to-slate-950 px-6 py-10 shadow-[0_24px_90px_rgba(6,95,70,0.55)] md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Book Now
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Secure your free assessment session this week.
              </h3>
              <p className="text-sm text-emerald-100 md:text-base">
                Share your goal and our coaching team will map out the exact training path for the next
                8–12 weeks. No guesswork, just clear direction.
              </p>
            </div>
            <form onSubmit={handleBookingSubmit} className="space-y-3 text-sm">
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleBookingChange}
                  placeholder="Full Name"
                  className="h-11 rounded-xl border border-emerald-400/30 bg-slate-950/60 px-3 text-sm text-slate-50 outline-none ring-emerald-400/40 transition focus:ring-2"
                />
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleBookingChange}
                  placeholder="Phone Number"
                  className="h-11 rounded-xl border border-emerald-400/30 bg-slate-950/60 px-3 text-sm text-slate-50 outline-none ring-emerald-400/40 transition focus:ring-2"
                />
              </div>
              <select
                name="goal"
                value={bookingForm.goal}
                onChange={handleBookingChange}
                className="h-11 w-full rounded-xl border border-emerald-400/30 bg-slate-950/60 px-3 text-sm text-slate-50 outline-none ring-emerald-400/40 transition focus:ring-2"
              >
                <option value="">Primary Fitness Goal</option>
                <option value="fat-loss">Drop body fat and tighten up</option>
                <option value="strength">Build serious strength and performance</option>
                <option value="recomp">Rebuild muscle and lose fat together</option>
                <option value="athletic">Train for sport or competition</option>
              </select>
              <CTAButton type="submit" className="w-full justify-center">
                Book Now
              </CTAButton>
            </form>
          </div>
        </div>
      </Motion.section>

      <Motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-4 pb-24 pt-4"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionTitle
            eyebrow="Results"
            title="Members Who Changed Their Standard"
            description="Real lifters, real schedules, real progress. No filters, no shortcuts, just consistent work backed by smart programming."
          />
          <Motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
            {testimonials.map(testimonial => (
              <Motion.div
                key={testimonial.name}
                variants={cardVariant}
                className="flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-5 text-sm text-slate-300"
              >
                <p className="mb-4 text-slate-200">“{testimonial.quote}”</p>
                <div>
                  <p className="font-semibold text-emerald-300">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Motion.section>
    </Motion.main>
  )
}

export default Home
