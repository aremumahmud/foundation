import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef(null)
  const horizontalRef = useRef(null)
  const [currentSection, setCurrentSection] = useState(0)

  const sections = [
    {
      id: 1,
      title: "Our Story",
      subtitle: "How it all began",
      content: "Founded in 2015, our foundation emerged from a simple belief: every person deserves hope, support, and the opportunity to thrive. What started as a small community initiative has grown into a comprehensive support network serving thousands of families.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758231060/IMG_3764_f1ux9x.jpg",
      stats: "Founded in 2015"
    },
    {
      id: 2,
      title: "Our Mission",
      subtitle: "What drives us forward",
      content: "We are dedicated to providing essential support, resources, and opportunities to widows, children, and families in need. Through targeted programs and community partnerships, we create lasting change that transforms lives.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758229764/IMG_3760_tflh27.jpg",
      stats: "3,700+ Lives Impacted"
    },
    {
      id: 3,
      title: "Our Vision",
      subtitle: "The future we're building",
      content: "We envision a world where no one faces life's challenges alone. A community where support is readily available, hope is restored, and every individual has the resources they need to build a brighter future.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758251239/IMG_3765_f014b0.jpg",
      stats: "Building Tomorrow"
    },
    {
      id: 4,
      title: "Our Impact",
      subtitle: "Making a difference",
      content: "Through our comprehensive programs, we've supported over 500 widows, helped 1,200 children access education and care, and provided emergency aid to 2,000+ families. But our impact goes beyond numbers—it's about restored hope and transformed lives.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758229764/IMG_3760_tflh27.jpg",
      stats: "500+ Widows • 1,200+ Children • 2,000+ Families"
    },
    {
      id: 5,
      title: "Our Team",
      subtitle: "The hearts behind the mission",
      content: "Our dedicated team of volunteers, social workers, and community leaders work tirelessly to ensure every person who comes to us receives the support they need. Together, we're building stronger communities.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758251239/IMG_3765_f014b0.jpg",
      stats: "50+ Team Members"
    }
  ]

  useEffect(() => {
    const container = containerRef.current
    const horizontalSection = horizontalRef.current

    if (!container || !horizontalSection) return

    // Set initial section to 0
    setCurrentSection(0)

    const timer = setTimeout(() => {
      const sectionsCount = sections.length // Use sections.length instead of children.length for accuracy
      const totalWidth = sectionsCount * window.innerWidth
      const maxTranslate = totalWidth - window.innerWidth



      gsap.set(horizontalSection, {
        width: totalWidth,
        x: 0
      })

      const scrollTween = gsap.to(horizontalSection, {
        x: -maxTranslate,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${container.offsetHeight - window.innerHeight}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Calculate section index to ensure last section is reachable
            const progress = self.progress
            let sectionIndex

            if (progress >= 0.95) {
              // Ensure we reach the last section when close to the end
              sectionIndex = sectionsCount - 1
            } else {
              sectionIndex = Math.floor(progress * sectionsCount)
            }

            setCurrentSection(Math.min(sectionIndex, sectionsCount - 1))
          },
          onRefresh: () => {
            setCurrentSection(0)
            // Recalculate dimensions on refresh
            const newTotalWidth = sections.length * window.innerWidth
            gsap.set(horizontalSection, { width: newTotalWidth, x: 0 })
          },
          onStart: () => {
            setCurrentSection(0)
          }
        }
      })

      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        scrollTween.kill()
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === container) {
            trigger.kill()
          }
        })
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [sections.length])

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">About Our Foundation</h1>
            <p className="hero-subtitle">
              Discover our journey, mission, and the impact we're making in communities around the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="horizontal-container">
        <div className="horizontal-sticky">
          <div ref={horizontalRef} className="horizontal-content">
            {sections.map((section, index) => (
              <div key={section.id} className="about-section">
                <div className="section-content">
                  <div className="section-text">
                    <div className="section-number">0{section.id}</div>
                    <h2 className="section-title">{section.title}</h2>
                    <h3 className="section-subtitle">{section.subtitle}</h3>
                    <p className="section-description">{section.content}</p>
                    <div className="section-stats">{section.stats}</div>
                  </div>
                  <div className="section-image">
                    <img src={section.image} alt={section.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          />
        </div>
        <div className="progress-dots">
          {sections.map((_, index) => (
            <div 
              key={index}
              className={`progress-dot ${index === currentSection ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Join Our Mission</h2>
            <p className="cta-description">
              Together, we can create lasting change and build stronger communities. 
              Your support makes all the difference.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/contact"
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.a>
              <motion.a
                href="/donate"
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
