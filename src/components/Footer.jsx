import { motion as Motion } from 'framer-motion'
import { Instagram, Facebook, Youtube } from 'lucide-react'

function Footer() {
  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-slate-200 bg-slate-50 px-4 py-12 text-slate-600 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-300"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold">
              GP
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                GymPro
              </span>
              <span className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                gamma
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Modern gym admin platform that keeps your members, classes, staff, and payments organized in
            one clean dashboard.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#top" className="hover:text-emerald-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-emerald-300">
                  About
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-emerald-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              Visit Us
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              145 Ironclad Avenue
              <br />
              Downtown District
              <br />
              Mon–Fri: 5am – 11pm
              <br />
              Sat–Sun: 6am – 9pm
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              Contact
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              +1 (555) 013-4521
              <br />
              coach@gammagym.com
            </p>
            <div className="flex gap-3 text-slate-400">
              <a href="#" aria-label="Instagram" className="hover:text-emerald-500 dark:hover:text-emerald-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-emerald-500 dark:hover:text-emerald-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-emerald-500 dark:hover:text-emerald-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row dark:border-slate-800">
        <p>© {new Date().getFullYear()} gamma. All rights reserved.</p>
        <p className="text-[11px]">
          Built for gym teams who want clear operations, better insight, and happier members.
        </p>
      </div>
    </Motion.footer>
  )
}

export default Footer
