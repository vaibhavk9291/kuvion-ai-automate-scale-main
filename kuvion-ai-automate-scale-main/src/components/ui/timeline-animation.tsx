'use client';

import { motion, useInView, Variants } from 'framer-motion';
import React, { ElementType, useRef } from 'react';

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: {
    visible: (i: number) => any;
    hidden: any;
  };
  as?: ElementType;
  className?: string;
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  customVariants,
  as: Component = 'div',
  className,
}: TimelineContentProps) {
  const fallbackRef = useRef<HTMLElement>(null);
  const ref = timelineRef || fallbackRef;
  const isInView = useInView(ref as any, { once: true, margin: '-10% 0px' });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const variants = customVariants || defaultVariants;

  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      ref={fallbackRef}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
