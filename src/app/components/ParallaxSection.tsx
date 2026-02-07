import { ReactNode, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // positive = slower upward, negative = downward
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Memoize the transform so it's not recreated on every render
  const y = useMemo(
    () => useTransform(scrollYProgress, [0, 1], ['0%', `${speed * -100}%`]),
    [scrollYProgress, speed]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}