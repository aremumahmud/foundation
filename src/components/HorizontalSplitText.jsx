import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(GSAPSplitText);

const HorizontalSplitText = ({
  text,
  tag = 'h1',
  style = {},
  className = '',
  delay = 50,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 30 },
  to = { opacity: 1, y: 0 },
  shouldAnimate = false,
  onComplete = () => {}
}) => {
  const ref = useRef(null);
  const splitInstanceRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || !text || hasAnimated) return;

    const el = ref.current;

    // Clean up previous split instance
    if (splitInstanceRef.current) {
      try {
        splitInstanceRef.current.revert();
      } catch (e) {
        // Ignore cleanup errors
      }
      splitInstanceRef.current = null;
    }

    // Only animate when shouldAnimate is true
    if (shouldAnimate && !hasAnimated) {
      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        reduceWhiteSpace: false,
        onSplit: (self) => {
          let targets;
          if (splitType.includes('chars') && self.chars.length) targets = self.chars;
          if (!targets && splitType.includes('words') && self.words.length) targets = self.words;
          if (!targets && splitType.includes('lines') && self.lines.length) targets = self.lines;
          if (!targets) targets = self.chars || self.words || self.lines;

          if (targets && targets.length > 0) {
            gsap.fromTo(
              targets,
              { ...from },
              {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                onComplete: () => {
                  setHasAnimated(true);
                  onComplete();
                },
                willChange: 'transform, opacity',
                force3D: true
              }
            );
          }
        }
      });

      splitInstanceRef.current = splitInstance;
    }

    return () => {
      if (splitInstanceRef.current) {
        try {
          splitInstanceRef.current.revert();
        } catch (e) {
          // Ignore cleanup errors
        }
        splitInstanceRef.current = null;
      }
    };
  }, [text, shouldAnimate, hasAnimated, delay, duration, ease, splitType, from, to, onComplete]);

  const renderTag = () => {
    const mergedStyle = {
      textAlign: 'center',
      overflow: 'hidden',
      display: 'inline-block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      willChange: 'transform, opacity',
      ...style
    };

    const classes = `horizontal-split-text ${className}`;

    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref} style={mergedStyle} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref} style={mergedStyle} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref} style={mergedStyle} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref} style={mergedStyle} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref} style={mergedStyle} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref} style={mergedStyle} className={classes}>
            {text}
          </h6>
        );
      default:
        return (
          <p ref={ref} style={mergedStyle} className={classes}>
            {text}
          </p>
        );
    }
  };

  return renderTag();
};

export default HorizontalSplitText;
