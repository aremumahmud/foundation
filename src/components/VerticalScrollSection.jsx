import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import HorizontalSplitText from './HorizontalSplitText';
import './VerticalScrollSection.css';

const VerticalScrollSection = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [textAnimation, setTextAnimation] = useState(false);

  const panels = [
    {
      id: 1,
      type: "structured",
      bg: '#ffffff',
      circleImage: 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758283504/0919_oo9pjm.png',
      bigText: "HOPE",
      description: "Bringing light to those in darkness, one step at a time",
      scrollText: "Join us in making a difference"
    },
    {
      id: 2,
      type: "structured",
      bg: '#f8f9fa',
      circleImage: 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758487024/519834009_122132871728730348_3309937617445396581_n_i188vx.jpg',
      bigText: "CHILDREN",
      description: "Luzi Foundation's educational support, mentorship, and care programs ensure every child has the opportunity to thrive",
      scrollText: "1,200+ Children Helped"
    },
    {
      id: 3,
      type: "structured",
      bg: '#ffffff',
      circleImage: 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758283504/0919_oo9pjm.png',
      bigText: "COMMUNITY",
      description: "Luzi Foundation provides emergency relief, food assistance, and community development initiatives for the underprivileged",
      scrollText: "2,000+ Families Served"
    },
    {
      id: 4,
      type: "structured",
      bg: '#f8f9fa',
      circleImage: 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758283504/0919_oo9pjm.png',
      bigText: "WIDOWS",
      description: "Luzi Foundation provides emotional support, financial assistance, and community resources for widows rebuilding their lives",
      scrollText: "500+ Widows Supported"
    },
    {
      id: 5,
      type: "structured",
      bg: '#ffffff',
      circleImage: 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758283504/0919_oo9pjm.png',
      bigText: "CONNECT",
      description: "Follow our journey and see the impact we're making in real-time on Facebook",
      scrollText: "Follow Us"
    },
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
      
      setScrollProgress(progress);
      
      // Calculate current panel based on scroll progress
      const panelIndex = Math.floor(progress * panels.length);
      setCurrentPanel(Math.min(panelIndex, panels.length - 1));
      
      // Trigger text animation when panel comes into view
      if (progress > 0.1 && progress < 0.9) {
        setTextAnimation(true);
      } else {
        setTextAnimation(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [panels.length]);

  return (
    <div ref={containerRef} className="vertical-scroll-section">
      <div className="vertical-container">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.id}
            className="vertical-panel"
            style={{ backgroundColor: panel.bg }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="vertical-panel-content">
              {/* Image Section */}
              <div className="vertical-image-section">
                <motion.img
                  src={panel.circleImage}
                  alt="Panel content"
                  className="vertical-panel-image"
                  style={{
                    // Different shapes for each panel
                    borderRadius: panel.id === 1 ? '50%' : // Circle
                                  panel.id === 2 ? '0%' : // Rectangle
                                  panel.id === 3 ? '20%' : // Rounded rectangle
                                  panel.id === 4 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : // Irregular
                                  '50%', // Default circle
                    clipPath: panel.id === 4 ? 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' : 'none'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Text Section */}
              <div className="vertical-text-section">
                <HorizontalSplitText
                  text={panel.bigText}
                  tag="h1"
                  style={{
                    fontSize: '3rem',
                    fontWeight: '300',
                    color: '#232520',
                    margin: '0 0 1.5rem 0',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    textAlign: 'center'
                  }}
                  delay={50}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  shouldAnimate={textAnimation && currentPanel === index}
                  onComplete={() => {}}
                />

                <motion.p 
                  className="vertical-description"
                  style={{
                    fontSize: '1rem',
                    color: '#666',
                    margin: '0 0 2rem 0',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    fontWeight: '300',
                    maxWidth: '400px',
                    margin: '0 auto 2rem auto'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {panel.description}
                </motion.p>

                <motion.div 
                  className="vertical-scroll-indicator"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '2rem'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div style={{
                    width: '2px',
                    height: '20px',
                    backgroundColor: '#232520'
                  }}></div>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#232520',
                    fontWeight: '300'
                  }}>{panel.scrollText}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VerticalScrollSection;
