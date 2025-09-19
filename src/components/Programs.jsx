import { useEffect, useRef, useState } from 'react';
import './Programs.css'

function Programs() {
  const containerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const programs = [
    {
      id: 1,
      title: "Support for Widows",
      description: "Comprehensive assistance programs providing financial support, counseling, and community resources to help widows rebuild their lives and support their families.",
      image: "/src/assets/Image_fx (1).jpg",
      icon: "👩‍👧‍👦"
    },
    {
      id: 2,
      title: "Children's Programs",
      description: "Educational support, mentorship, and recreational activities designed to empower children and provide them with opportunities for growth and development.",
      image: "/src/assets/Image_fx.jpg",
      icon: "🌟"
    },
    {
      id: 3,
      title: "Community Aid",
      description: "Essential services including food assistance, healthcare support, and emergency relief to strengthen our community and help those in need.",
      image: "/src/assets/ChatGPT Image Sep 13, 2025, 12_26_02 PM.png",
      icon: "🤝"
    }
  ]

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      setIsScrolling(true);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.clientX - startX;
      container.style.transform = `translateX(${currentX}px)`;
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      setIsScrolling(false);

      const threshold = 100;
      if (Math.abs(currentX) > threshold) {
        if (currentX > 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else if (currentX < 0 && currentIndex < programs.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
      
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
      currentX = 0;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentIndex < programs.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, programs.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="programs-section" data-scroll-section>
      <div className="programs-container" ref={containerRef}>
        {programs.map((program, index) => (
          <div key={program.id} className="program-panel">
            <div className="program-card">
              <div className="program-image">
                <img src={program.image} alt={program.title} />
                <div className="program-overlay">
                  <span className="program-icon">{program.icon}</span>
                </div>
              </div>
              <div className="program-content">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <a href="#" className="program-link">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="programs-nav">
        {programs.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Programs
