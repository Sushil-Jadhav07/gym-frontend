import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'
import { fadeUp, staggerContainer, pageVariant } from '../components/MotionWrappers'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Contact form submitted:', form)
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
      <section className="px-4 pb-16 pt-28 md:pt-32">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-6xl space-y-6 text-center md:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Let’s map out your next training phase.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-slate-400 md:mx-0 md:text-base">
            Share where you are, where you want to be, and what has held you back. Our coaching team
            will follow up with a clear recommendation and next steps.
          </p>
        </Motion.div>
      </section>

      <Motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-4 pb-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr,1fr] md:items-start">
          <Motion.div variants={fadeUp} className="rounded-3xl border border-emerald-500/25 bg-slate-900/80 p-6 md:p-8">
            <SectionTitle
              eyebrow="Get In Touch"
              title="Tell us about your goals."
              align="left"
              description="The more detail you share, the more precise our recommendation will be."
            />
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="h-11 rounded-xl border border-emerald-400/30 bg-slate-950/60 px-3 text-sm text-slate-50 outline-none ring-emerald-400/40 transition focus:ring-2"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="h-11 rounded-xl border border-emerald-400/30 bg-slate-950/60 px-3 text-sm text-slate-50 outline-none ring-emerald-400/40 transition focus:ring-2"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="h-11 w-full rounded-xl border border-emerald-400/30 bg-slate-950/60 px-3 text-sm text-slate-50 outline-none ring-emerald-400/40 transition focus:ring-2"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Share your training history, current routine, and what you want to achieve."
                className="w-full rounded-xl border border-emerald-400/30 bg-slate-950/60 px-3 py-3 text-sm text-slate-50 outline-none ring-emerald-400/40 transition focus:ring-2"
              />
              <CTAButton type="submit" className="w-full justify-center">
                Submit
              </CTAButton>
            </form>
          </Motion.div>

          <Motion.div variants={fadeUp} className="space-y-8">
            <SectionTitle
              eyebrow="Visit"
              title="Where to find us"
              align="left"
              description="Drop in for a tour, or schedule a free assessment to experience a full session."
            />
            <div className="space-y-4 text-sm text-slate-300">
              <p>
                145 Ironclad Avenue
                <br />
                Downtown District
                <br />
                City, State
              </p>
              <p>
                Mon–Fri: 5am – 11pm
                <br />
                Sat–Sun: 6am – 9pm
              </p>
              <p>
                Phone: +1 (555) 013-4521
                <br />
                Email: coach@gammagym.com
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/80 p-4 text-xs text-slate-400">
              <p className="mb-2 text-slate-200">Map preview</p>
              <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-emerald-500/30 bg-slate-950/80 text-[11px] text-slate-500">
                Map integration placeholder. Embed your favorite map provider here.
              </div>
            </div>
          </Motion.div>
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
            Ready to start training with intent?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100 md:text-base">
            Submit the form above and our team will respond within one business day with clear next
            steps and times for your first session.
          </p>
        </div>
      </Motion.section>
    </Motion.main>
  )
}

export default Contact
