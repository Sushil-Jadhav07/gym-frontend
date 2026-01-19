import { motion as Motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import CTAButton from './CTAButton'
import { fadeUp } from './MotionWrappers'

function HomeBookDemo({ bookingForm, handleBookingChange, handleBookingSubmit }) {
  return (
    <Motion.section
      id="book"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="px-4 pb-24 pt-10"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white px-6 py-8 md:px-10 md:py-10 dark:border-emerald-500/30 dark:from-emerald-500/15 dark:via-emerald-400/5 dark:to-slate-950">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Let's talk about your gym
              </h3>
              <p className="text-slate-700 dark:text-slate-400">
                Share your goals—member management, billing, maintenance, or vendor control. We'll tailor
                a demo for your needs.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-emerald-500/10 bg-white p-4 dark:bg-slate-900/50">
                <p className="font-semibold text-emerald-600 dark:text-emerald-400">Share</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-500">
                  Goals & timelines
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/10 bg-white p-4 dark:bg-slate-900/50">
                <p className="font-semibold text-emerald-600 dark:text-emerald-400">Demo</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-500">
                  See GymPro live
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/10 bg-white p-4 dark:bg-slate-900/50">
                <p className="font-semibold text-emerald-600 dark:text-emerald-400">Launch</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-500">
                  Guided onboarding
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-emerald-500/10 bg-white p-4 dark:bg-slate-900/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-slate-950">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                  <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                    support@gympro.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-emerald-500/10 bg-white p-4 dark:bg-slate-900/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-slate-950">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    +1 (555) 000-0000
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-emerald-500/10 bg-white p-4 dark:bg-slate-900/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-slate-950">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Visit</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  123 Fitness Blvd, Gym City, GC 12345
                </p>
                <a href="#" className="mt-1 block text-xs text-emerald-400 hover:underline">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleBookingSubmit}
            className="space-y-4 rounded-2xl bg-slate-50/5 p-6 md:p-8 border border-white/5"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleBookingChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleBookingChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={bookingForm.email}
                onChange={handleBookingChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                How can we help?
              </label>
              <textarea
                name="message"
                value={bookingForm.message}
                onChange={handleBookingChange}
                rows={4}
                placeholder="Tell us about your gym, goals, and timelines."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
              />
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-5 items-center">
                <input
                  id="agreeToContact"
                  name="agreeToContact"
                  type="checkbox"
                  checked={bookingForm.agreeToContact}
                  onChange={handleBookingChange}
                  className="h-4 w-4 rounded border-slate-300 bg-white text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 dark:border-slate-700 dark:bg-slate-900 dark:text-emerald-500"
                />
              </div>
              <label
                htmlFor="agreeToContact"
                className="text-xs text-slate-600 dark:text-slate-400"
              >
                I agree to be contacted by GymPro about this request.
              </label>
            </div>

            <div className="flex justify-end pt-2">
              <CTAButton type="submit" className="gap-2">
                Submit <Send className="h-4 w-4" />
              </CTAButton>
            </div>
          </form>
        </div>
      </div>
    </Motion.section>
  )
}

export default HomeBookDemo
