import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Banner from './components/Banner'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import OurWorks from './pages/OurWorks'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



function App() {
  useEffect(() => {
    // Enable smooth scrolling with CSS and GSAP enhancements
    document.documentElement.style.scrollBehavior = 'smooth'

    // Add smooth scroll to anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: target, offsetY: 114 }, // Account for fixed header
            ease: "power2.inOut"
          })
        }
      }
    }

    // Add event listeners to all anchor links
    document.addEventListener('click', handleAnchorClick)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Banner />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
