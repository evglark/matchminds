'use client';

import { motion, Variants } from 'framer-motion';
import { FC, PropsWithChildren, useRef } from 'react';

import { FADE_IN_UP } from '@/utils/animations';

interface AnimatedSectionProps {
  variants?: Variants;
  margin?: string;
}

const AnimatedSection: FC<PropsWithChildren<AnimatedSectionProps>> = ({
  children,
  variants = FADE_IN_UP,
  margin = '0px 0px -200px 0px',
}) => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={variants}
      whileInView={'visible'}
      viewport={{ once: true, margin }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
