import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Programs.css'

const Programs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const programs = [
    {
      id: 1,
      title: "Widow Support Program",
      subtitle: "Empowering widows to rebuild their lives",
      description: "Our comprehensive widow support program provides financial assistance, counseling services, skills training, and community support to help widows navigate their new circumstances and build sustainable futures.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758283674/0919_5_f19ry3.png",
      features: [
        "Monthly financial assistance",
        "Grief counseling and emotional support",
        "Skills training and job placement",
        "Legal aid and advocacy",
        "Community support groups"
      ],
      stats: {
        beneficiaries: "500+",
        success_rate: "85%",
        duration: "Ongoing"
      },
      color: "#FFD700"
    },
    {
      id: 2,
      title: "Children's Education Program",
      subtitle: "Ensuring every child has access to quality education",
      description: "We provide educational support, school supplies, uniforms, and scholarships to children from disadvantaged families, ensuring they have the tools they need to succeed academically.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758487024/519834009_122132871728730348_3309937617445396581_n_i188vx.jpg",
      features: [
        "School fees and supplies",
        "Educational scholarships",
        "After-school tutoring",
        "Nutritional support",
        "Mentorship programs"
      ],
      stats: {
        beneficiaries: "1,200+",
        success_rate: "92%",
        duration: "Year-round"
      },
      color: "#4CAF50"
    },
    {
      id: 3,
      title: "Emergency Relief Program",
      subtitle: "Immediate assistance when families need it most",
      description: "Our emergency relief program provides rapid response support for families facing crisis situations, including food assistance, temporary shelter, medical aid, and other urgent needs.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758283565/0919_6_xtt3r5.png",
      features: [
        "Emergency food assistance",
        "Temporary shelter support",
        "Medical emergency aid",
        "Crisis intervention",
        "Rapid response team"
      ],
      stats: {
        beneficiaries: "2,000+",
        success_rate: "98%",
        duration: "24/7 Response"
      },
      color: "#FF6B6B"
    },
    {
      id: 4,
      title: "Community Development",
      subtitle: "Building stronger, more resilient communities",
      description: "We work with local communities to develop sustainable solutions, improve infrastructure, create economic opportunities, and strengthen social networks that support long-term growth.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758283512/0919_4_pin48p.png",
      features: [
        "Infrastructure development",
        "Economic empowerment",
        "Community organizing",
        "Leadership training",
        "Sustainable development"
      ],
      stats: {
        beneficiaries: "15+",
        success_rate: "90%",
        duration: "Multi-year"
      },
      color: "#9C27B0"
    }
  ]

  return (
    <div ref={ref} className="programs-page">
      <div className="container">
        <motion.div
          className="programs-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="programs-header" variants={itemVariants}>
            <div className="header-badge">Our Impact</div>
            <h1 className="programs-title">Transforming Lives Through Action</h1>
            <p className="programs-subtitle">
              Each program represents our commitment to creating lasting change. From immediate relief
              to long-term empowerment, we address the full spectrum of community needs with
              compassion, expertise, and unwavering dedication.
            </p>
            <div className="programs-overview">
              <div className="overview-stat">
                <span className="overview-number">4</span>
                <span className="overview-label">Core Programs</span>
              </div>
              <div className="overview-stat">
                <span className="overview-number">3,700+</span>
                <span className="overview-label">Lives Impacted</span>
              </div>
              <div className="overview-stat">
                <span className="overview-number">90%</span>
                <span className="overview-label">Success Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Program */}
          <motion.div className="featured-program" variants={itemVariants}>
            <div className="featured-content">
              <div className="featured-badge">Featured Program</div>
              <h2 className="featured-title">{programs[0].title}</h2>
              <p className="featured-description">{programs[0].description}</p>
              <div className="featured-stats">
                <div className="featured-stat">
                  <span className="featured-stat-number">{programs[0].stats.beneficiaries}</span>
                  <span className="featured-stat-label">Widows Supported</span>
                </div>
                <div className="featured-stat">
                  <span className="featured-stat-number">{programs[0].stats.success_rate}</span>
                  <span className="featured-stat-label">Success Rate</span>
                </div>
              </div>
              <motion.button
                className="featured-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About This Program
              </motion.button>
            </div>
            <div className="featured-image">
              <img src={programs[0].image} alt={programs[0].title} />
              <div className="featured-overlay"></div>
            </div>
          </motion.div>

          {/* Programs Grid */}
          <motion.div className="programs-section" variants={containerVariants}>
            <div className="section-header">
              <h2 className="section-title">All Programs</h2>
              <p className="section-subtitle">Comprehensive support across multiple areas of need</p>
            </div>

            <div className="programs-grid">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  className="program-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="card-image">
                    <img src={program.image} alt={program.title} />
                    <div className="card-overlay" style={{ background: `linear-gradient(135deg, ${program.color}90, ${program.color}60)` }}>
                      <div className="card-badge" style={{ backgroundColor: program.color }}>
                        {String(program.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="card-title">{program.title}</h3>
                    <p className="card-subtitle">{program.subtitle}</p>
                    <p className="card-description">{program.description}</p>

                    <div className="card-features">
                      <h4 className="features-title">Key Services:</h4>
                      <div className="features-grid">
                        {program.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="feature-tag">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="card-stats">
                      <div className="card-stat">
                        <span className="card-stat-number">{program.stats.beneficiaries}</span>
                        <span className="card-stat-label">Beneficiaries</span>
                      </div>
                      <div className="card-stat">
                        <span className="card-stat-number">{program.stats.success_rate}</span>
                        <span className="card-stat-label">Success Rate</span>
                      </div>
                    </div>

                    <motion.button
                      className="card-cta"
                      style={{ borderColor: program.color, color: program.color }}
                      whileHover={{
                        backgroundColor: program.color,
                        color: '#ffffff',
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Support This Program
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="programs-cta" variants={itemVariants}>
            <div className="cta-content">
              <h2 className="cta-title">Ready to Make a Difference?</h2>
              <p className="cta-description">
                Join us in transforming lives and building stronger communities. 
                Whether through volunteering, donating, or spreading awareness, 
                your support makes our programs possible.
              </p>
              <div className="cta-buttons">
                <motion.a
                  href="/donate"
                  className="cta-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                </motion.a>
                <motion.a
                  href="/contact"
                  className="cta-button secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volunteer With Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Programs
