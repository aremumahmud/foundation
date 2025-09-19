import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
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

          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/programs" className="nav-link">Programs</Link>
            <Link to="/our-works" className="nav-link">Our Works</Link>
            <Link to="/donate" className="nav-link">Donate</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="header-cta">
            <a href="#donate" className="donate-btn">Donate</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
