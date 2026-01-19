import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }
    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-20">
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
