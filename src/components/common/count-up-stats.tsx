'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { animate } from 'framer-motion';

type CountUpStatsProps = {
  from?: number;
  to: number;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function CountUpStats({ from = 0, to, prefix = '', duration = 2.5, className }: CountUpStatsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = prefix + value.toFixed(0);
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, prefix]);

  return <span ref={ref} className={className} />;
}
