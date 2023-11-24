'use client';

import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import { FADE_IN_OUT, getFramerProps } from '@/utils/animations';

const FadeInOutContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.main variants={FADE_IN_OUT} {...getFramerProps()}>
      {children}
    </motion.main>
  );
};

export default FadeInOutContainer;
