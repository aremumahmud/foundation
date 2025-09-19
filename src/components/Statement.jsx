import './Statement.css'
import { useEffect, useRef } from 'react'
const statementImage = 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758283512/0919_4_pin48p.png'
import SplitText from './Split_text'

function Statement() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add scrolled class when section comes into view
            console.log('Section in view - adding scrolled class')
            entry.target.classList.add('scrolled')
          } else {
            // Remove scrolled class when section goes out of view
            console.log('Section out of view - removing scrolled class')
            entry.target.classList.remove('scrolled')
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -10% 0px' // Start animation slightly before fully in view
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])


  return (
    <>
      <section className="statement-section" ref={sectionRef} data-scroll-section>
        <div className="statement-container">
          <div className="statement-text" data-scroll data-scroll-speed="1">
            <SplitText
              text="Building Hope"
              className="statement-line line-1"
              delay={80}
              duration={0.9}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              tag="h2"
            />
            <SplitText
              text="Across Communities"
              className="statement-line line-2"
              delay={120}
              duration={0.9}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              tag="h2"
            />
          </div>

          <div className="statement-content-grid">
            <div className="statement-image" data-scroll data-scroll-speed="-0.3">
              <div className="statement-img">
                <img src={statementImage} alt="Community members smiling" />
              </div>
            </div>

            <div className="statement-description" data-scroll data-scroll-speed="0.3">
              <p className="description-text">
                We believe in the power of community to transform lives. Through our programs, we provide essential support, resources, and opportunities to widows, children, and families who need it most.
              </p>

              <div className="statement-cta">
                <a href="#" className="cta-btn primary">Learn More</a>
                <a href="#" className="cta-btn secondary">Get Involved</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Statement
