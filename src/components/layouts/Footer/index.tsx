'use client';
import { FC } from 'react';

import { LanguageDropdown, Link, Logo } from '@/components/ui';
import { FOOTER_LINKS, NAVBAR_LINKS } from '@/constants';

import s from './styles.module.scss';

const Footer: FC = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={s.upContent}>
          <Logo />
          <div className={s.linksWrapper}>
            {NAVBAR_LINKS.map(({ link, text }, idx) => (
              <Link key={`footer_up_links-${idx}`} href={link}>
                {text}
              </Link>
            ))}
            <div className={s.language}>
              <LanguageDropdown isReverted />
            </div>
          </div>
        </div>
        <div className={s.downContent}>
          {FOOTER_LINKS.map(({ link, text }, idx) => (
            <Link key={`footer_down_links-${idx}`} href={link} className={s.down_link}>
              {text}
            </Link>
          ))}
          <p className={s.matchMinds}>© MatchMinds {fullYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
