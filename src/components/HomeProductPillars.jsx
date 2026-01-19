import { motion as Motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import IconCard from './IconCard'
import { staggerContainer } from './MotionWrappers'
import {
  Users,
  CalendarClock,
  CreditCard,
  UserCog,
  BarChart3,
  Activity,
} from 'lucide-react'

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

function HomeProductPillars() {
  return (
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
          title="Everything Your gamma Team Needs"
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
  )
}

export default HomeProductPillars

