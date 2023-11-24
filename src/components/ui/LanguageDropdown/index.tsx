'use client';

import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

import Icon from '@/components/ui/Icon';
import { LANGUAGES } from '@/constants/languages';
import { getTransition, LANGUAGE_MENU_VARIANTS } from '@/utils/animations';

import s from './styles.module.scss';

interface Props {
  isReverted?: boolean;
}

export const LanguageDropdown: FC<Props> = ({ isReverted }) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState(LANGUAGES[0]);

  const handleChange = (e: any): void => {
    if (!ref.current?.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleChange);
    return () => {
      document.body.removeEventListener('click', handleChange);
    };
  }, []);

  return (
    <div
      className={cn(s.menuLanguageDropdown, { [s.revertedLang]: isReverted })}
      ref={ref}
      onClick={() => setActive((prev) => !prev)}
    >
      <div className={s.language}>
        <figure className={s.imageContainer}>
          <Icon name="globe" />
        </figure>
        <p>{language.label}</p>
        <Icon name="langArrow" className={cn(s.icon, { [s.rotated]: active })} />
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className={s.drop}
            variants={LANGUAGE_MENU_VARIANTS}
            transition={{ ...getTransition() }}
          >
            {LANGUAGES.filter(({ value }) => value !== language.value).map(
              (lang, idx) => (
                <div
                  onClick={() => {
                    setLanguage(lang);
                  }}
                  key={`lang-${idx}`}
                >
                  {lang.label}
                </div>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
