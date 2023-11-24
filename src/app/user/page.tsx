'use client';

import { useCookies } from 'next-client-cookies';
import { FC } from 'react';

import { Title } from '@/components/ui';

import s from './styles.module.scss';

const User: FC = () => {
  const cookies = useCookies();
  const currentEmail = cookies.get('activeEmail');
  const token = cookies.get('apiToken');
  const active = !!(currentEmail && token);

  return (
    <div className={s.wrapper}>
      {active ? (
        <>
          <Title name="h1">
            <span>User</span> logged in
          </Title>
          <Title name="h2">
            <span>{currentEmail}</span>
          </Title>
        </>
      ) : (
        <Title name="h1">
          <span>User</span> logged out
        </Title>
      )}
    </div>
  );
};

export default User;
