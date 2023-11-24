'use client';

import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';

import Icon from '@/components/ui/Icon';
import { ACCORDION_VARIANTS, getTransition } from '@/utils/animations';

import s from './styles.module.scss';

interface Props {
  question: string;
  answer: string;
}

export const Accordion: FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className={s.accordion}>
      <motion.div key="question" className={s.rounded} onClick={() => setIsOpen(!isOpen)}>
        <motion.div>{question}</motion.div>
        <motion.div>
          <Icon name="arrow" className={cn(s.icon, { [s.rotated]: isOpen })} />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={ACCORDION_VARIANTS}
            transition={{ ...getTransition() }}
            className={s.paragraph}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
