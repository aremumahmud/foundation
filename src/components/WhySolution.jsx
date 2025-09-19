import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './WhySolution.css';
const cardImage1 = 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758231060/IMG_3764_f1ux9x.jpg';
const cardImage2 = 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758229764/IMG_3760_tflh27.jpg';
const cardImage3 = 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758251239/IMG_3765_f014b0.jpg';
const cardImage4 = 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758231060/IMG_3764_f1ux9x.jpg';

const WhySolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const whyData = [
    {
      image: cardImage1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Widows Face Isolation",
      description: "Many widows struggle with loneliness, financial instability, and lack of community support after losing their partners."
    },
    {
      image: cardImage2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: "Children Need Guidance",
      description: "Children from underprivileged families often lack access to quality education, mentorship, and opportunities to thrive."
    },
    {
      image: cardImage3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      ),
      title: "Communities Are Struggling",
      description: "Many communities lack resources, emergency support, and development programs to help families in need."
    }
  ];

  const solutionData = [
    {
      image: cardImage2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <path d="M20 8v6"/>
          <path d="M23 11h-6"/>
        </svg>
      ),
      title: "Comprehensive Support",
      description: "We provide emotional, financial, and practical support to help widows rebuild their lives with dignity and hope."
    },
    {
      image: cardImage4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      title: "Educational Programs",
      description: "Our children's programs offer mentorship, educational support, and life skills training to unlock their potential."
    },
    {
      image: cardImage1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Community Development",
      description: "We work with communities to create sustainable programs that address immediate needs and long-term growth."
    }
  ];

  return (
    <div ref={ref} className="why-solution-section">
      {/* Why Section */}
      <motion.section
        className="why-section"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Why We Exist</h2>
            <p className="section-subtitle">
              Every person deserves hope, support, and the opportunity to thrive.
              We believe in the power of community to transform lives.
            </p>
          </motion.div>

          <div className="section-content1">
            <div className="cards-grid">
              {whyData.map((item, index) => (
                <motion.div
                  key={index}
                  className="problem-card"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-icon">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        className="solution-section"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Our Solution</h2>
            <p className="section-subtitle">
              Through targeted programs and community partnerships,
              we create lasting change that transforms lives and builds stronger communities.
            </p>
          </motion.div>

          <div className="section-content1">
            <div className="cards-grid">
              {solutionData.map((item, index) => (
                <motion.div
                  key={index}
                  className="solution-card"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-icon">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div 
        className="cta-section1"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container">
          <motion.div 
            className="cta-content"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="cta-title">Join Us in Making a Difference</h3>
            <p className="cta-description">
              Together, we can create a world where everyone has the support they need to thrive.
            </p>
            <motion.button 
              className="cta-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(35, 37, 32, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhySolution;
