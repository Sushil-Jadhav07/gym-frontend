import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  Users,
  CalendarClock,
  CreditCard,
  UserCog,
  BarChart3,
  Activity,
  ShieldCheck,
  LineChart,
  Handshake,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import IconCard from '../components/IconCard'
import CTAButton from '../components/CTAButton'
import { fadeUp, staggerContainer, cardVariant, pageVariant } from '../components/MotionWrappers'

const featureCards = [
  {
    icon: <Users className="h-6 w-6 text-emerald-300" />,
    title: 'Member Management',
    description: 'Centralize member profiles, plans, attendance, and communication in one place.',
  },
  {
    icon: <CalendarClock className="h-6 w-6 text-emerald-300" />,
    title: 'Class Scheduling',
    description: 'Build timetables, manage capacity, and handle bookings in real time.',
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-300" />,
    title: 'Billing & Payments',
    description: 'Track subscriptions, invoices, and payments with clear status and history.',
  },
  {
    icon: <UserCog className="h-6 w-6 text-emerald-300" />,
    title: 'Staff Management',
    description: 'Assign roles, manage permissions, and monitor staff performance.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-emerald-300" />,
    title: 'Analytics & Reports',
    description: 'See members, revenue, and class performance at a glance on your dashboard.',
  },
  {
    icon: <Activity className="h-6 w-6 text-emerald-300" />,
    title: 'Equipment Tracking',
    description: 'Monitor equipment status and maintenance so nothing interrupts your classes.',
  },
]

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

const whyUsItems = [
  {
    icon: <Activity className="h-6 w-6 text-emerald-300" />,
    title: 'Live Operational Overview',
    description: 'Monitor members, revenue, classes, and equipment from a single dashboard.',
  },
  {
    icon: <Handshake className="h-6 w-6 text-emerald-300" />,
    title: 'Built For Gym Teams',
    description: 'Simple for front desk, coaches, and owners to use without extra training.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-300" />,
    title: 'Secure & Reliable',
    description: 'Modern, secure infrastructure so your member and payment data stays protected.',
  },
  {
    icon: <LineChart className="h-6 w-6 text-emerald-300" />,
    title: 'Grows With Your Gym',
    description: 'From single studios to multi-location facilities, GymPro scales with you.',
  },
]

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Gym Owner',
    quote:
      'We moved our operations into GymPro and cut admin time by almost half. The team finally has one place to manage everything.',
  },
  {
    name: 'Jordan Lee',
    role: 'Operations Manager',
    quote:
      'Classes, payments, and member messages all flow through one system now. The dashboard tells me exactly what needs attention today.',
  },
  {
    name: 'Taylor Morgan',
    role: 'Multi-location Franchise Lead',
    quote:
      'GymPro gives me clear numbers on each site. I can see revenue, active members, and class load without chasing spreadsheets.',
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
              Gym Management Dashboard
            </Motion.p>
            <Motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
            >
              Run your gym.
              <br />
              One powerful admin dashboard.
            </Motion.h1>
            <Motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-xl text-sm text-slate-400 md:text-base"
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
                    Dashboard Snapshot
                  </p>
                  <p className="mt-4 text-sm text-slate-300">
                    See the numbers that matter as soon as you log in: members, classes, revenue, and
                    equipment status.
                  </p>
                  <div className="mt-6 space-y-3 text-xs text-slate-400">
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                      <span>Total Members</span>
                      <span className="text-emerald-300">1,234</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                      <span>Active Classes</span>
                      <span className="text-emerald-300">48</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                      <span>Monthly Revenue</span>
                      <span className="text-emerald-300">$45,231</span>
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
            eyebrow="Product Pillars"
            title="Everything Your Gym Admin Team Needs"
            description="Six connected modules that keep your members, classes, staff, payments, and equipment aligned."
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
            eyebrow="Why GymPro"
            title="Why Gym Teams Choose Our Dashboard"
            description="Designed with gym owners, managers, and coaches so the admin work finally feels simple."
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
                Book Demo
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                See GymPro running with your gym use cases.
              </h3>
              <p className="text-sm text-emerald-100 md:text-base">
                Share how you currently manage members, classes, and payments. We will walk you through
                the dashboard and show how GymPro can simplify your daily admin work.
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
                <option value="">Main goal for your gym</option>
                <option value="operations">Streamline day‑to‑day operations</option>
                <option value="attendance">Improve class attendance and engagement</option>
                <option value="billing">Simplify billing and payment tracking</option>
                <option value="analytics">Get clearer reporting and insights</option>
              </select>
              <CTAButton type="submit" className="w-full justify-center">
                Request Demo
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
            title="Gyms That Simplified Their Admin"
            description="From independent studios to multi-location gyms, teams use GymPro to keep operations clear and predictable."
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
