'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            scrollObserver.unobserve(entry.target);
          }, delay);
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'scroll-reveal';
      case 'left':
        return 'scroll-reveal-left';
      case 'right':
        return 'scroll-reveal-right';
      default:
        return 'scroll-reveal';
    }
  }

  return (
    <div
      ref={ref}
      className={cn(getDirectionClass(), isVisible && 'visible', className)}
    >
      {children}
    </div>
  );
}
