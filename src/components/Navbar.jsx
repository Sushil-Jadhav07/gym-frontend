import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import CTAButton from './CTAButton'
import { fadeIn } from './MotionWrappers'

const links = [
  { href: '#top', label: 'Overview' },
  { href: '#programs', label: 'Features' },
  { href: '#why', label: 'Why GymPro' },
  { href: '#book', label: 'Get Demo' },
]

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const linkClass =
    'group relative text-sm font-medium transition-colors text-slate-900 hover:text-emerald-600 dark:text-slate-100 dark:hover:text-emerald-300'

  return (
    <Motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-4 transition-colors ${
          scrolled
            ? 'border-b border-slate-200 bg-white/80 backdrop-blur dark:border-emerald-500/20 dark:bg-slate-950/95'
            : 'bg-white/90 dark:bg-slate-950/80'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold">
            GP
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-500 dark:text-emerald-400">
              GymPro
            </span>
            <span className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              gamma
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          {links.map(link => (
            <a key={link.href} href={link.href} className={linkClass}>
              <span className="relative inline-flex flex-col items-center">
                <span>{link.label}</span>
                <span className="mt-[6px] h-[2px] w-full origin-center rounded-full bg-emerald-400 transition-transform duration-300 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-emerald-500/40 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <CTAButton onClick={() => scrollToSection('book')}>Book Demo</CTAButton>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 md:hidden dark:border-emerald-500/40 dark:bg-slate-900/80 dark:text-slate-100"
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-900 transition-transform dark:bg-slate-100 ${
                open ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-900 transition-opacity dark:bg-slate-100 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-900 transition-transform dark:bg-slate-100 ${
                open ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <Motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-b border-slate-200 bg-white/95 backdrop-blur md:hidden dark:border-emerald-500/20 dark:bg-slate-950/98"
          >
            <Motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4 pt-3"
            >
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="h-5 w-5 text-xs text-emerald-400">▸</span>
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-emerald-500/40 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
                <CTAButton
                  className="flex-1 justify-center"
                  onClick={() => {
                    setOpen(false)
                    scrollToSection('book')
                  }}
                >
                  Book Demo
                </CTAButton>
              </div>
            </Motion.div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </Motion.nav>
  )
}

export default Navbar

