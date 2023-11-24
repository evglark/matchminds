import { useRouter } from 'next/navigation';
import { FC } from 'react';

import ROUTES from '@/constants/routes';

import s from './styles.module.scss';

export const Logo: FC = () => {
  const router = useRouter();
  return (
    <div className={s.logo} onClick={() => router.push(ROUTES.DEFAULT)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/pages/logo.svg" alt="logo" />
    </div>
  );
};
