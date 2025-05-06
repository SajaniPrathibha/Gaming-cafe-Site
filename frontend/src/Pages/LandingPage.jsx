import React from 'react'
import Home from './Home'
import About from './About'
import GameSection from './GameSection'
import Tournaments from './Tournaments'
import Contact from './Contact'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Home/>
        <About/>
        <GameSection/>
        <Tournaments/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default LandingPage