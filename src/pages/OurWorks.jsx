import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './OurWorks.css';

const OurWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152504/luzi/WhatsApp_Video_2025-09-18_at_00.10.58_iqjere.mp4",
      title: "Community Support Program",
      description: "Providing essential aid to families in need",
      category: "Community Aid"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152484/luzi/WhatsApp_Video_2025-09-18_at_00.07.13_n5s6ry.mp4",
      title: "Children's Education Initiative",
      description: "Supporting children's educational development",
      category: "Education"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152465/luzi/WhatsApp_Video_2025-09-18_at_00.07.23_bcoqpf.mp4",
      title: "Widow Support Network",
      description: "Empowering widows through community programs",
      category: "Support"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152428/luzi/WhatsApp_Video_2025-09-18_at_00.07.15_fk4n1m.mp4",
      title: "Food Distribution Drive",
      description: "Ensuring no family goes hungry",
      category: "Relief"
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152409/luzi/WhatsApp_Video_2025-09-18_at_00.07.25_z9k8lr.mp4",
      title: "Healthcare Outreach",
      description: "Bringing medical care to underserved communities",
      category: "Healthcare"
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152390/luzi/WhatsApp_Video_2025-09-18_at_00.07.02_uk9vnf.mp4",
      title: "Emergency Response",
      description: "Rapid response to community emergencies",
      category: "Emergency"
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152390/luzi/WhatsApp_Video_2025-09-18_at_00.07.09_my3nua.mp4",
      title: "Youth Development",
      description: "Mentoring and developing young leaders",
      category: "Youth"
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152318/luzi/WhatsApp_Video_2025-09-18_at_00.07.03_s9lr4r.mp4",
      title: "Skills Training Program",
      description: "Teaching valuable skills for employment",
      category: "Training"
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152318/luzi/WhatsApp_Video_2025-09-18_at_00.11.01_u1nbzj.mp4",
      title: "Community Building",
      description: "Strengthening community bonds and unity",
      category: "Community"
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152314/luzi/WhatsApp_Video_2025-09-18_at_00.07.04_h5cpu2.mp4",
      title: "Women Empowerment",
      description: "Supporting women's independence and growth",
      category: "Empowerment"
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152301/luzi/WhatsApp_Video_2025-09-18_at_00.07.16_lp7vqm.mp4",
      title: "Elderly Care Program",
      description: "Providing care and support for elderly community members",
      category: "Care"
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dvauarkh6/video/upload/v1758152296/luzi/WhatsApp_Video_2025-09-18_at_00.07.17_ygpsip.mp4",
      title: "Volunteer Training",
      description: "Training dedicated volunteers for community service",
      category: "Training"
    }
  ];

  const categories = ["All", ...new Set(videos.map(video => video.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const openVideoModal = (video, index) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const navigateVideo = (direction) => {
    const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredVideos.length;
    } else {
      newIndex = currentIndex === 0 ? filteredVideos.length - 1 : currentIndex - 1;
    }
    
    setSelectedVideo(filteredVideos[newIndex]);
    setCurrentVideoIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedVideo) {
        if (e.key === 'Escape') closeVideoModal();
        if (e.key === 'ArrowRight') navigateVideo('next');
        if (e.key === 'ArrowLeft') navigateVideo('prev');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, filteredVideos]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
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

  return (
    <div ref={ref} className="our-works">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="works-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="header-badge">Our Impact</div>
          <h1 className="works-title">See Our Work in Action</h1>
          <p className="works-subtitle">
            Witness the real impact we're making in our community through these authentic moments 
            captured during our various programs and initiatives.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div 
          className="video-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="video-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => openVideoModal(video, index)}
            >
              <div className="video-thumbnail">
                <video
                  src={video.url}
                  muted
                  playsInline
                  preload="metadata"
                  className="thumbnail-video"
                />
                <div className="play-overlay">
                  <div className="play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="category-tag">{video.category}</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          className="video-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeVideoModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeVideoModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="video-container">
              <video
                src={selectedVideo.url}
                controls
                autoPlay
                playsInline
                className="modal-video"
              />
            </div>
            
            <div className="modal-info">
              <div className="modal-category">{selectedVideo.category}</div>
              <h3 className="modal-title">{selectedVideo.title}</h3>
              <p className="modal-description">{selectedVideo.description}</p>
            </div>

            <div className="modal-navigation">
              <button 
                className="nav-btn prev-btn" 
                onClick={() => navigateVideo('prev')}
                disabled={filteredVideos.length <= 1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
                Previous
              </button>
              <span className="video-counter">
                {filteredVideos.findIndex(v => v.id === selectedVideo.id) + 1} of {filteredVideos.length}
              </span>
              <button 
                className="nav-btn next-btn" 
                onClick={() => navigateVideo('next')}
                disabled={filteredVideos.length <= 1}
              >
                Next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OurWorks;
