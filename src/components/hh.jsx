import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './HorizontalScroll.css';

const HorizontalScrollSection = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    if (!scrollContainer) return;

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal'
    });

    const container = containerRef.current;
    const horizontalSection = horizontalRef.current;

    const handleScroll = (instance) => {
      if (!container || !horizontalSection) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrollProgress = Math.abs(rect.top) / (rect.height - windowHeight);
        const panels = horizontalSection.children.length;
        const maxScroll = (panels - 1) * window.innerWidth;
        const horizontalScroll = scrollProgress * maxScroll;
        
        horizontalSection.style.transform = `translateX(-${Math.min(horizontalScroll, maxScroll)}px)`;
      }
    };

    // Listen to Locomotive Scroll events
    locomotiveScrollRef.current.on('scroll', handleScroll);

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <div 
        ref={containerRef}
        className="horizontal-scroll-container"
        data-scroll-section
      >
        <div className="horizontal-scroll-sticky">
          <div 
            ref={horizontalRef}
            className="horizontal-scroll-track"
          >
            <div className="horizontal-panel panel-1">
              <h3 data-scroll data-scroll-speed="2">Panel 1</h3>
              <p data-scroll data-scroll-speed="1">Your content here</p>
            </div>
            <div className="horizontal-panel panel-2">
              <h3 data-scroll data-scroll-speed="2">Panel 2</h3>
              <p data-scroll data-scroll-speed="1">Your content here</p>
            </div>
            <div className="horizontal-panel panel-3">
              <h3 data-scroll data-scroll-speed="2">Panel 3</h3>
              <p data-scroll data-scroll-speed="1">Your content here</p>
            </div>
            <div className="horizontal-panel panel-4">
              <h3 data-scroll data-scroll-speed="2">Panel 4</h3>
              <p data-scroll data-scroll-speed="1">Your content here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;