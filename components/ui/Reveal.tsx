'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li';
}

/**
 * Scroll-triggered reveal wrapper (motion.dev), used across sections for
 * the Spectacular direction. Fires once per element, respects
 * prefers-reduced-motion by skipping the animation entirely.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = as === 'li' ? motion.li : motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
