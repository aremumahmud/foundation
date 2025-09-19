import './Header.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  return (
    <>
      {/* Yellow Banner */}
      <div className="top-banner">
        <div className="banner-container">
          <p className="banner-text">
            🌟 Help us reach our goal of supporting 1,000 more families this year!
            <a href="#donate" className="banner-link">Donate Now</a>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Foundation Logo" className="logo-image" />
            <span className="logo-text">Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/programs" className="nav-link">Programs</Link>
              <Link to="/our-works" className="nav-link">Our Works</Link>
              <Link to="/donate" className="nav-link">Donate</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          )}

          <div className="header-cta">
            {!isMobile && (
              <a href="#donate" className="donate-btn">Donate</a>
            )}

            {/* Mobile Hamburger Menu */}
            {isMobile && (
              <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Side Navigation */}
      {isMobile && (
        <>
          <div
            className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={closeMobileMenu}
          ></div>
          <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-header">
              <Link to="/" className="mobile-nav-logo" onClick={closeMobileMenu}>
                <img src={logo} alt="Foundation Logo" className="mobile-nav-logo-image" />
                <span className="mobile-nav-logo-text">Foundation</span>
              </Link>
              <button
                className="mobile-nav-close"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                ×
              </button>
            </div>
            <div className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
              <Link to="/programs" className="mobile-nav-link" onClick={closeMobileMenu}>Programs</Link>
              <Link to="/our-works" className="mobile-nav-link" onClick={closeMobileMenu}>Our Works</Link>
              <Link to="/donate" className="mobile-nav-link" onClick={closeMobileMenu}>Donate</Link>
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link>
            </div>
            <div className="mobile-nav-cta">
              <a href="#donate" className="mobile-donate-btn" onClick={closeMobileMenu}>Donate Now</a>
            </div>
          </nav>
        </>
      )}
    </>
  )
}

export default Header
