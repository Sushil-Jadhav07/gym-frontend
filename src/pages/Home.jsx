import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { pageVariant } from '../components/MotionWrappers'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeProductPillars from '../components/HomeProductPillars'
import HomeDashboardModules from '../components/HomeDashboardModules'
import HomeWhyGymPro from '../components/HomeWhyGymPro'
import HomeResults from '../components/HomeResults'
import HomeBookDemo from '../components/HomeBookDemo'

function Home() {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreeToContact: false,
  })

  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookingChange = event => {
    const { name, value, type, checked } = event.target
    setBookingForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
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
      className="bg-transparent"
    >
      <HomeHeroSection scrollToSection={scrollToSection} />
      <HomeProductPillars />
      <HomeDashboardModules scrollToSection={scrollToSection} />
      <HomeWhyGymPro />
      <HomeResults />
      <HomeBookDemo
        bookingForm={bookingForm}
        handleBookingChange={handleBookingChange}
        handleBookingSubmit={handleBookingSubmit}
      />
    </Motion.main>
  )
}

export default Home
