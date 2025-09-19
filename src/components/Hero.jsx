import './Hero.css'
import heroImage from '../assets/Image_fx.jpg'

function Hero() {
  return (
    <section className="hero" data-scroll-section>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-number">01</div>
          <h1 className="hero-title">
            Supporting
            <span className="hero-highlight"> Communities</span>
            <br />
            Building Hope
          </h1>
          <p className="hero-description">
            Providing essential support and resources to widows, children,
            and families who need it most.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Supported</span>
            </div>
            <div className="stat">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Helped</span>
            </div>
            <div className="stat">
              <span className="stat-number">2,000+</span>
              <span className="stat-label">Served</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#programs" className="hero-btn">Explore Programs</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Community support" />
        </div>
      </div>
    </section>
  )
}

export default Hero
