import React from 'react'
import Home from './Home'
import About from './About'
import GameSection from './GameSection'
import Tournaments from './Tournaments'
import Contact from './Contact'
import Footer from '../Components/Footer'
import Pricing from './Pricing'

const LandingPage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="games">
        <GameSection />
      </section>

      <section id="tournaments">
        <Tournaments />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
