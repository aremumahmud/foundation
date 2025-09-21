import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './VerticalAboutSection.css';

const VerticalAboutSection = () => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 1,
      title: "Our Story",
      subtitle: "How it all began",
      content: "Founded in 2015, Luzi Foundation emerged from a simple belief: every person deserves hope, support, and the opportunity to thrive. What started as a small community initiative has grown into a comprehensive support network serving thousands of families.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758283441/0919_1_apdabw.png",
      stats: "Founded in 2015"
    },
    {
      id: 2,
      title: "Our Mission",
      subtitle: "What drives us forward",
      content: "Luzi Foundation is dedicated to providing essential support, resources, and opportunities to widows, children, and families in need. Through targeted programs and community partnerships, we create lasting change that transforms lives.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758283321/0919_3_bkq5w0.png",
      stats: "3,700+ Lives Impacted"
    },
    {
      id: 3,
      title: "Our Vision",
      subtitle: "The future we're building",
      content: "We envision a world where no one faces life's challenges alone. A community where support is readily available, hope is restored, and every individual has the resources they need to build a brighter future.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758152272/luzi/WhatsApp_Image_2025-09-18_at_00.11.00_1_qde9jr.jpg",
      stats: "Building Tomorrow"
    },
    {
      id: 4,
      title: "Our Impact",
      subtitle: "Making a difference",
      content: "Through Luzi Foundation's comprehensive programs, we've supported over 500 widows, helped 1,200 children access education and care, and provided emergency aid to 2,000+ families. But our impact goes beyond numbers—it's about restored hope and transformed lives.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758152272/luzi/WhatsApp_Image_2025-09-18_at_00.11.00_2_j1cipc.jpg",
      stats: "500+ Widows • 1,200+ Children • 2,000+ Families"
    },
    {
      id: 5,
      title: "Our Team",
      subtitle: "The hearts behind the mission",
      content: "Luzi Foundation's dedicated team of volunteers, social workers, and community leaders work tirelessly to ensure every person who comes to us receives the support they need. Together, we're building stronger communities.",
      image: "https://res.cloudinary.com/dvauarkh6/image/upload/v1758283798/0919_7_kw2l7b.png",
      stats: "50+ Team Members"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on container position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const containerHeight = rect.height;
      
      // Calculate how much of the container has been scrolled past
      const scrolled = scrollTop - containerTop + windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / containerHeight));
      
      // Calculate current section based on scroll progress
      const sectionIndex = Math.floor(progress * sections.length);
      setCurrentSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections.length]);

  return (
    <div ref={containerRef} className="vertical-about-section">
      <div className="vertical-about-container">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="vertical-about-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="vertical-about-content">
              {/* Text Section */}
              <div className="vertical-about-text">
                <motion.div 
                  className="section-number"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  0{section.id}
                </motion.div>
                
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h2>
                
                <motion.h3 
                  className="section-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {section.subtitle}
                </motion.h3>
                
                <motion.p 
                  className="section-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {section.content}
                </motion.p>
                
                <motion.div 
                  className="section-stats"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {section.stats}
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="vertical-about-image">
                <motion.img 
                  src={section.image} 
                  alt={section.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="vertical-progress-indicator">
        <div className="vertical-progress-bar">
          <div 
            className="vertical-progress-fill"
            style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          />
        </div>
        <div className="vertical-progress-dots">
          {sections.map((_, index) => (
            <div 
              key={index}
              className={`vertical-progress-dot ${index === currentSection ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalAboutSection;
