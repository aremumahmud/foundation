import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import './VideoCarousel.css'

const VideoCarousel = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [currentVideo, setCurrentVideo] = useState(0)

  // Real video data from our foundation work
  const videos = [
    {
      id: 1,
      title: "Supporting Widows in Our Community",
      description: "Watch how we provide essential support and resources to widows, helping them rebuild their lives with dignity and hope.",
      thumbnail: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152465/luzi/WhatsApp_Video_2025-09-18_at_00.07.23_bcoqpf.jpg",
      videoUrl: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152465/luzi/WhatsApp_Video_2025-09-18_at_00.07.23_bcoqpf.mp4",
      duration: "2:15"
    },
    {
      id: 2,
      title: "Children's Education Program Impact",
      description: "See the transformative power of education as we help children access quality learning opportunities and build brighter futures.",
      thumbnail: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152484/luzi/WhatsApp_Video_2025-09-18_at_00.07.13_n5s6ry.jpg",
      videoUrl: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152484/luzi/WhatsApp_Video_2025-09-18_at_00.07.13_n5s6ry.mp4",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Emergency Relief in Action",
      description: "Witness our rapid response team providing immediate assistance to families facing crisis situations in their most vulnerable moments.",
      thumbnail: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152428/luzi/WhatsApp_Video_2025-09-18_at_00.07.15_fk4n1m.jpg",
      videoUrl: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152428/luzi/WhatsApp_Video_2025-09-18_at_00.07.15_fk4n1m.mp4",
      duration: "2:30"
    },
    {
      id: 4,
      title: "Community Development Success Stories",
      description: "Discover how we're building stronger, more resilient communities through sustainable development and empowerment programs.",
      thumbnail: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152504/luzi/WhatsApp_Video_2025-09-18_at_00.10.58_iqjere.jpg",
      videoUrl: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152504/luzi/WhatsApp_Video_2025-09-18_at_00.10.58_iqjere.mp4",
      duration: "3:20"
    }
  ]

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToVideo = (index) => {
    setCurrentVideo(index)
  }

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

  return (
    <section ref={ref} className="video-carousel-section">
      <div className="container">
        <motion.div 
          className="video-carousel-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="carousel-header" variants={itemVariants}>
            <div className="header-content">
              <div className="header-badge">Our Impact Stories</div>
              <h2 className="carousel-title">See Our Work in Action</h2>
              <p className="carousel-subtitle">
                Watch real stories of transformation and hope as we work together to build stronger communities and change lives.
              </p>
            </div>
            
            {/* Navigation Controls */}
            <div className="carousel-controls">
              <motion.button
                className="control-btn prev-btn"
                onClick={prevVideo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"/>
                </svg>
              </motion.button>
              <motion.button
                className="control-btn next-btn"
                onClick={nextVideo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Video Display */}
          <motion.div className="video-display" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo}
                className="video-container"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="video-wrapper">
                  <video
                    src={videos[currentVideo].videoUrl}
                    title={videos[currentVideo].title}
                    controls
                    playsInline
                    className="carousel-video"
                  />
                </div>
                
                <div className="video-info">
                  <div className="video-meta">
                    <span className="video-duration">{videos[currentVideo].duration}</span>
                    <span className="video-number">{currentVideo + 1} of {videos.length}</span>
                  </div>
                  <h3 className="video-title">{videos[currentVideo].title}</h3>
                  <p className="video-description">{videos[currentVideo].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Video Thumbnails */}
          <motion.div className="video-thumbnails" variants={itemVariants}>
            {videos.map((video, index) => (
              <motion.button
                key={video.id}
                className={`thumbnail-btn ${index === currentVideo ? 'active' : ''}`}
                onClick={() => goToVideo(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={video.thumbnail} alt={video.title} />
                <div className="thumbnail-overlay">
                  <div className="play-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div className="carousel-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3 className="cta-title">Want to See More?</h3>
              <p className="cta-description">
                Follow our journey on Facebook for more inspiring stories, updates, and behind-the-scenes content.
              </p>
              <motion.a
                href="https://facebook.com/foundationofhope" // Replace with actual Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Visit Our Facebook Page</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoCarousel
