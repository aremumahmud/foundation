import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Donate.css'

const Donate = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [copiedField, setCopiedField] = useState('')
  const [activeTab, setActiveTab] = useState('nigerian')

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

  const donationAccounts = {
    nigerian: {
      title: "Nigerian Account - Polaris Bank",
      country: "Nigeria",
      flag: "🇳🇬",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18"/>
          <path d="M5 21V7l8-4v18"/>
          <path d="M19 21V11l-6-4"/>
          <path d="M9 9v.01"/>
          <path d="M9 12v.01"/>
          <path d="M9 15v.01"/>
          <path d="M9 18v.01"/>
        </svg>
      ),
      details: [
        { label: "Bank Name", value: "Polaris Bank" },
        { label: "Account Name", value: "Luzi Women And Children Care Foundation" },
        { label: "Account Number", value: "4092061904" }
      ]
    },
    us: {
      title: "US Account - Coming Soon",
      country: "United States",
      flag: "🇺🇸",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18"/>
          <path d="M5 21V7l8-4v18"/>
          <path d="M19 21V11l-6-4"/>
          <path d="M9 9v.01"/>
          <path d="M9 12v.01"/>
          <path d="M9 15v.01"/>
          <path d="M9 18v.01"/>
        </svg>
      ),
      details: [
        { label: "Status", value: "Coming Soon" },
        { label: "Note", value: "US account details will be available soon" }
      ]
    }
  }

  const tabs = [
    { id: 'nigerian', label: 'Polaris Bank Nigeria', flag: '🇳🇬' },
    { id: 'us', label: 'US Account (Coming Soon)', flag: '🇺🇸' }
  ]

  const impactLevels = [
    {
      amount: "$25",
      title: "Basic Support",
      description: "Provides a week's worth of meals for a family in need",
      icon: "🍽️"
    },
    {
      amount: "$50",
      title: "Educational Aid",
      description: "Covers school supplies and books for one child for a month",
      icon: "📚"
    },
    {
      amount: "$100",
      title: "Emergency Relief",
      description: "Provides emergency assistance for urgent family needs",
      icon: "🆘"
    },
    {
      amount: "$250",
      title: "Comprehensive Care",
      description: "Supports a widow with counseling and financial assistance for a month",
      icon: "💝"
    }
  ]

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(''), 2000)
    })
  }

  return (
    <div ref={ref} className="donate-page">
      <div className="container">
        <motion.div 
          className="donate-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="donate-header" variants={itemVariants}>
            <h1 className="donate-title">Make a Difference Today</h1>
            <p className="donate-subtitle">
              Your generous donation helps us continue our mission of supporting widows, 
              children, and families in need. Every contribution, no matter the size, makes a real impact.
            </p>
          </motion.div>

          {/* Impact Levels */}
          <motion.div className="impact-section" variants={itemVariants}>
            <h2 className="section-title">Your Impact</h2>
            <div className="impact-grid">
              {impactLevels.map((level, index) => (
                <motion.div
                  key={index}
                  className="impact-card"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="impact-icon">{level.icon}</div>
                  <div className="impact-amount">{level.amount}</div>
                  <h3 className="impact-title">{level.title}</h3>
                  <p className="impact-description">{level.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Donation Methods */}
          <motion.div className="donation-methods" variants={itemVariants}>
            <h2 className="section-title">Preferred Donation Methods</h2>
            <p className="section-subtitle">
              Choose your preferred bank account to make a secure donation. All funds go directly to our programs.
            </p>

            {/* Tabs */}
            <div className="donation-tabs">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="tab-flag">{tab.flag}</span>
                  <span className="tab-label">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Active Account Details */}
            <motion.div
              className="account-details"
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="account-card">
                <div className="account-header">
                  <div className="account-icon">{donationAccounts[activeTab].icon}</div>
                  <div className="account-info">
                    <h3 className="account-title">{donationAccounts[activeTab].title}</h3>
                    <div className="account-country">
                      <span className="country-flag">{donationAccounts[activeTab].flag}</span>
                      <span className="country-name">{donationAccounts[activeTab].country}</span>
                    </div>
                  </div>
                </div>

                <div className="account-details-grid">
                  {donationAccounts[activeTab].details.map((detail, idx) => (
                    <div key={idx} className="detail-row">
                      <span className="detail-label">{detail.label}:</span>
                      <div className="detail-value-container">
                        <span className="detail-value">{detail.value}</span>
                        <motion.button
                          className="copy-button"
                          onClick={() => copyToClipboard(detail.value, `${activeTab}-${detail.label}`)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {copiedField === `${activeTab}-${detail.label}` ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20,6 9,17 4,12"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                            </svg>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="account-note">
                  <div className="note-icon">💡</div>
                  <p className="note-text">
                    {activeTab.startsWith('nigerian')
                      ? "For Nigerian donors: Use your local bank's mobile app or visit any branch to make transfers. No international fees apply."
                      : "For international donors: SWIFT transfers may take 1-3 business days and may incur international transfer fees."
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Important Information */}
          <motion.div className="donation-info" variants={itemVariants}>
            <div className="info-card">
              <h3 className="info-title">Important Information</h3>
              <div className="info-content">
                <div className="info-item">
                  <strong>Tax Deductible:</strong> All donations are tax-deductible. You will receive a receipt for your records.
                </div>
                <div className="info-item">
                  <strong>Secure Transactions:</strong> All payment methods are secure and verified. Your financial information is protected.
                </div>
                <div className="info-item">
                  <strong>Direct Impact:</strong> 95% of your donation goes directly to our programs. Only 5% covers administrative costs.
                </div>
                <div className="info-item">
                  <strong>Transparency:</strong> We provide quarterly reports showing exactly how your donations are being used.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact for Large Donations */}
          <motion.div className="large-donation-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3>Planning a Large Donation?</h3>
              <p>For donations over $1,000 or to discuss planned giving options, please contact our development team directly.</p>
              <div className="cta-buttons">
                <motion.a
                  href="/contact"
                  className="cta-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="tel:+12109757482"
                  className="cta-button secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Donate
