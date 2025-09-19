import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './ActionSection.css';

const ActionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  const actionCards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: "Donate Now",
      description: "Make a direct impact with your financial contribution",
      buttonText: "Donate",
      buttonColor: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      href: "#donate"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <path d="M20 8v6"/>
          <path d="M23 11h-6"/>
        </svg>
      ),
      title: "Volunteer",
      description: "Join our team and make a difference in your community",
      buttonText: "Volunteer",
      buttonColor: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      href: "#volunteer"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <path d="M16 6l-4-4-4 4"/>
          <path d="M12 2v15"/>
        </svg>
      ),
      title: "Spread the Word",
      description: "Help us reach more people who need our support",
      buttonText: "Share",
      buttonColor: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      href: "#share"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Get Help",
      description: "Are you in need? We're here to support you",
      buttonText: "Contact Us",
      buttonColor: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      href: "#contact"
    }
  ];

  return (
    <div ref={ref} className="action-section">
      <div className="container">
        <motion.div 
          className="action-header"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="action-title">Ready to Take Action?</h2>
          <p className="action-subtitle">
            Every action, no matter how small, creates ripples of positive change. 
            Choose how you'd like to make a difference today.
          </p>
        </motion.div>

        <motion.div 
          className="action-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {actionCards.map((card, index) => (
            <motion.div
              key={index}
              className="action-card"
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <motion.a
                href={card.href}
                className="action-button"
                style={{ background: card.buttonColor }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {card.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="emergency-cta"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="emergency-content">
            <div className="emergency-info">
              <div className="emergency-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="emergency-text">
                <h3>Need Immediate Assistance?</h3>
                <p>Our support team is available 24/7 for urgent matters</p>
              </div>
            </div>
            <div className="emergency-actions">
              <motion.a
                href="tel:+1234567890"
                className="emergency-button primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Support
              </motion.a>
              <motion.a
                href="#contact"
                className="emergency-button secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActionSection;
