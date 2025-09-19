import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const circleImage = 'https://res.cloudinary.com/dvauarkh6/image/upload/v1758283504/0919_oo9pjm.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const DistinctivePanels = ({ locomotiveScrollInstance }) => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Ensure first panel is active on mount
  useEffect(() => {
    setCurrentPanel(0);
  }, []);

  // Handle responsive design
  useEffect(() => {
    const checkMobile = () => {
      const wasMobile = isMobile;
      const nowMobile = window.innerWidth <= 768;
      setIsMobile(nowMobile);

      // If mobile state changed, refresh ScrollTrigger
      if (wasMobile !== nowMobile) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    const horizontalSection = horizontalRef.current;

    if (!container || !horizontalSection) return;

    // Set initial panel to 0 to ensure first panel is active
    setCurrentPanel(0);

    const timer = setTimeout(() => {
      const panels = horizontalSection.children.length;

      // Kill any existing ScrollTriggers first
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });

      // Disable horizontal scroll on mobile
      if (isMobile) {
        gsap.set(horizontalSection, {
          width: '100%',
          x: 0,
          clearProps: 'transform'
        });
        return;
      }

      const totalWidth = panels * window.innerWidth;
      const maxTranslate = totalWidth - window.innerWidth;

      gsap.set(horizontalSection, {
        width: totalWidth,
        x: 0
      });

      const scrollTween = gsap.to(horizontalSection, {
        x: -maxTranslate,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${container.offsetHeight - window.innerHeight}`,
          scrub: 0.5,
          onUpdate: (self) => {
            const panelIndex = Math.round(self.progress * (panels - 1));
            setCurrentPanel(panelIndex);
          },
          onRefresh: () => {
            // Ensure first panel is active when ScrollTrigger refreshes
            setCurrentPanel(0);
          },
          onStart: () => {
            // Ensure first panel is active when scroll starts
            setCurrentPanel(0);
          }
        }
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        scrollTween.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === container) {
            trigger.kill();
          }
        });
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [locomotiveScrollInstance, isMobile]);

  const panels = [
    {
      id: 1,
      type: "minimal",
      bg: '#232520',
      title: "Support for Widows",
      subtitle: "Providing emotional support, financial assistance, and community resources for widows rebuilding their lives",
      number: "01",
      layout: "center",
      image: circleImage,
      stats: "500+ Widows Supported"
    },
    {
      id: 2,
      type: "split",
      bg: '#232520',
      title: "Children's Programs",
      subtitle: "Educational support, mentorship, and care programs ensuring every child has the opportunity to thrive",
      number: "02",
      layout: "split",
      accent: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      image: circleImage,
      stats: "1,200+ Children Helped"
    },
    {
      id: 3,
      type: "card",
      bg: '#232520',
      title: "Community Aid",
      subtitle: "Emergency relief, food assistance, and community development initiatives for the underprivileged",
      number: "03",
      layout: "card",
      features: ["Emergency Relief", "Food Assistance", "Development"],
      image: circleImage,
      stats: "2,000+ Families Served"
    },
    {
      id: 4,
      type: "gradient",
      bg: '#232520',
      title: "Our Impact",
      subtitle: "Together we're making a meaningful difference in our community",
      number: "04",
      layout: "gradient",
      textColor: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      image: circleImage
    }
  ];

  return (
    <div style={{ width: '100%' }}>
      <div
        ref={containerRef}
        data-scroll-section
        style={{
          height: isMobile ? 'auto' : '600vh',
          position: 'relative'
        }}
      >
        <div style={{
          position: isMobile ? 'relative' : 'sticky',
          top: 0,
          height: isMobile ? 'auto' : '100vh',
          overflow: isMobile ? 'visible' : 'hidden',
          width: '100%',
          backgroundColor: '#232520'
        }}>
          <div
            ref={horizontalRef}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              height: isMobile ? 'auto' : '100%',
              width: isMobile ? '100%' : '400vw',
              willChange: 'transform'
            }}
          >
            {panels.map((panel, index) => (
              <div
                key={panel.id}
                style={{
                  width: isMobile ? '100%' : '100vw',
                  height: isMobile ? 'auto' : '100%',
                  minHeight: isMobile ? '100vh' : 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: panel.bg,
                  flexShrink: 0,
                  position: 'relative',
                  padding: isMobile ? '2rem 1rem' : '0'
                }}
              >
                {/* Panel 1: Minimal Center Layout with Image */}
                {panel.type === 'minimal' && (
                  <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : 'space-between',
                    width: '100%',
                    height: '100%',
                    padding: isMobile ? '2rem 1rem' : '0 6rem',
                    boxSizing: 'border-box',
                    gap: isMobile ? '3rem' : '0'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isMobile ? 'center' : 'flex-start',
                      justifyContent: 'center',
                      width: isMobile ? '100%' : '50%',
                      gap: '2rem',
                      textAlign: isMobile ? 'center' : 'left'
                    }}>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '400',
                        color: '#9ca3af',
                        letterSpacing: '0.1em',
                        opacity: currentPanel === index ? 1 : 0.5,
                        transform: currentPanel === index ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        {panel.number}
                      </div>
                      <h1 style={{
                        fontSize: isMobile ? '2rem' : '3rem',
                        fontWeight: '300',
                        color: '#ffffff',
                        margin: 0,
                        lineHeight: '1.1',
                        letterSpacing: '-0.025em',
                        opacity: currentPanel === index ? 1 : 0.3,
                        transform: currentPanel === index ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                      }}>
                        {panel.title}
                      </h1>
                      <p style={{
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        fontWeight: '300',
                        color: '#d1d5db',
                        margin: 0,
                        lineHeight: '1.6',
                        maxWidth: '400px',
                        opacity: currentPanel === index ? 1 : 0.2,
                        transform: currentPanel === index ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                      }}>
                        {panel.subtitle}
                      </p>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        opacity: currentPanel === index ? 1 : 0.3,
                        transform: currentPanel === index ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                      }}>
                        {panel.stats}
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50%',
                      height: '100%'
                    }}>
                      <img
                        src={panel.image}
                        alt={panel.title}
                        style={{
                          width: '350px',
                          height: '350px',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          borderRadius: '50%',
                          opacity: currentPanel === index ? 1 : 0.4,
                          transform: currentPanel === index ? 'scale(1)' : 'scale(0.9)',
                          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                          boxShadow: currentPanel === index ? '0 20px 60px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Panel 2: Split Layout with Accent and Image */}
                {panel.type === 'split' && (
                  <div style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%'
                  }}>
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '0 4rem',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: '20%',
                        bottom: '20%',
                        width: '4px',
                        background: panel.accent,
                        opacity: currentPanel === index ? 1 : 0.3,
                        transition: 'all 0.8s ease'
                      }} />
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        background: panel.accent,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.1em',
                        marginBottom: '2rem',
                        opacity: currentPanel === index ? 1 : 0.5,
                        transition: 'all 0.8s ease'
                      }}>
                        {panel.number}
                      </div>
                      <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '300',
                        color: '#ffffff',
                        margin: '0 0 1.5rem 0',
                        lineHeight: '1.1',
                        opacity: currentPanel === index ? 1 : 0.3,
                        transform: currentPanel === index ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        {panel.title}
                      </h1>
                      <p style={{
                        fontSize: '1.1rem',
                        fontWeight: '300',
                        color: '#d1d5db',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem',
                        opacity: currentPanel === index ? 1 : 0.2,
                        transform: currentPanel === index ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                      }}>
                        {panel.subtitle}
                      </p>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        opacity: currentPanel === index ? 1 : 0.3,
                        transform: currentPanel === index ? 'translateX(0)' : 'translateX(-15px)',
                        transition: 'all 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                      }}>
                        {panel.stats}
                      </div>
                    </div>
                    <div style={{
                      flex: isMobile ? 'none' : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: isMobile ? '0' : '0 4rem'
                    }}>
                      <img
                        src={panel.image}
                        alt={panel.title}
                        style={{
                          width: isMobile ? '250px' : '320px',
                          height: isMobile ? '250px' : '320px',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          borderRadius: '20px',
                          opacity: currentPanel === index ? 1 : 0.4,
                          transform: currentPanel === index ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.9)',
                          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                          boxShadow: currentPanel === index ? '0 25px 70px rgba(34, 197, 94, 0.3)' : '0 10px 30px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Panel 3: Card Layout with Features and Image */}
                {panel.type === 'card' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    gap: '4rem',
                    padding: '0 6rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={panel.image}
                        alt={panel.title}
                        style={{
                          width: '300px',
                          height: '300px',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          borderRadius: '16px',
                          opacity: currentPanel === index ? 1 : 0.4,
                          transform: currentPanel === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: currentPanel === index ? '0 25px 70px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      maxWidth: '500px',
                      padding: '3rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: currentPanel === index ? '0 20px 60px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.05)',
                      transform: currentPanel === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#9ca3af',
                        letterSpacing: '0.15em',
                        marginBottom: '2rem',
                        opacity: currentPanel === index ? 1 : 0.5,
                        transition: 'all 0.8s ease'
                      }}>
                        {panel.number}
                      </div>
                      <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '400',
                        color: '#ffffff',
                        margin: '0 0 1rem 0',
                        lineHeight: '1.2',
                        opacity: currentPanel === index ? 1 : 0.3,
                        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                      }}>
                        {panel.title}
                      </h1>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: '300',
                        color: '#d1d5db',
                        margin: '0 0 1.5rem 0',
                        lineHeight: '1.6',
                        opacity: currentPanel === index ? 1 : 0.2,
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                      }}>
                        {panel.subtitle}
                      </p>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '2rem',
                        opacity: currentPanel === index ? 1 : 0.3,
                        transition: 'all 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                      }}>
                        {panel.stats}
                      </div>
                      <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        flexWrap: 'wrap'
                      }}>
                        {panel.features?.map((feature, i) => (
                          <span
                            key={i}
                            style={{
                              padding: '0.5rem 1rem',
                              background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                              borderRadius: '20px',
                              fontSize: '0.875rem',
                              fontWeight: '400',
                              color: '#232520',
                              opacity: currentPanel === index ? 1 : 0.3,
                              transform: currentPanel === index ? 'translateY(0)' : 'translateY(10px)',
                              transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + i * 0.1}s`
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Panel 4: Gradient Layout with Image */}
                {panel.type === 'gradient' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                    padding: '0 6rem',
                    position: 'relative'
                  }}>


                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      width: '50%',
                      gap: '2rem',
                      zIndex: 1
                    }}>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '400',
                        color: '#9ca3af',
                        letterSpacing: '0.1em',
                        opacity: currentPanel === index ? 1 : 0.5,
                        transform: currentPanel === index ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        {panel.number}
                      </div>
                      <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '200',
                        background: panel.textColor,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        lineHeight: '1.1',
                        letterSpacing: '-0.025em',
                        opacity: currentPanel === index ? 1 : 0.3,
                        transform: currentPanel === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                      }}>
                        {panel.title}
                      </h1>
                      <p style={{
                        fontSize: '1.1rem',
                        fontWeight: '300',
                        color: '#d1d5db',
                        margin: 0,
                        lineHeight: '1.6',
                        maxWidth: '400px',
                        opacity: currentPanel === index ? 1 : 0.2,
                        transform: currentPanel === index ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                      }}>
                        {panel.subtitle}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50%',
                      height: '100%',
                      zIndex: 1
                    }}>
                      <img
                        src={panel.image}
                        alt={panel.title}
                        style={{
                          width: '380px',
                          height: '380px',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          borderRadius: '50%',
                          opacity: currentPanel === index ? 1 : 0.4,
                          transform: currentPanel === index ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-5deg)',
                          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                          boxShadow: currentPanel === index ? '0 30px 80px rgba(35, 37, 32, 0.3)' : '0 15px 40px rgba(35, 37, 32, 0.2)',
                          border: '3px solid rgba(35, 37, 32, 0.1)'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Progress Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '4rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {panels.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: currentPanel === i ? '2rem' : '0.5rem',
                        height: '2px',
                        background: currentPanel === i ? 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' : 'rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistinctivePanels;