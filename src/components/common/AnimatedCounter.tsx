import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1200,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          const counterObj = { current: 0 };
          animate(counterObj, {
            current: value,
            duration: duration,
            ease: 'outExpo',
            onUpdate: () => {
              setDisplayValue(counterObj.current);
            },
          });
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toString();

  return (
    <span ref={elementRef} className={`font-mono font-black tabular-nums ${className}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
};

