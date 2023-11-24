import Link from 'next/link';
import { FC } from 'react';

import Icon from '@/components/ui/Icon';
import SOCIAL_NETWORKS from '@/constants/socialNetworks';

import s from './styles.module.scss';

export const FormFooter: FC = () => (
  <div className={s.formFooter}>
    <div className={s.devider}>
      <div className={s.line} />
      <div>Or</div>
      <div className={s.line} />
    </div>
    <p>You can log in using other services</p>
    <div className={s.snIcons}>
      {SOCIAL_NETWORKS.map(({ title, link }, idx) => (
        <Link key={`icon-${idx}`} href={link}>
          <Icon name={title} />
        </Link>
      ))}
    </div>
  </div>
);
