import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import GrowthStatistics from './components/GrowthStatistics'
import OurWorks from './components/OurWorks'
import AwardsRecognition from './components/AwardsRecognition'
import ClientTestimonials from './components/ClientTestimonials'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <GrowthStatistics/>
      <ServicesSection/>
      <OurWorks/>
      <AwardsRecognition/>
      <ClientTestimonials/>
      <BlogSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App