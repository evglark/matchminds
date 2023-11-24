'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

import { Button, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';

import s from './style.module.scss';

export const ErrorData: FC = ({ error }: { error?: string }) => {
  const { push } = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={s.error}>
      <Title name="h1" className={s.title}>
        {error ? (
          <>{error}</>
        ) : (
          <>
            Something went <span>wrong!</span>
          </>
        )}
      </Title>
      <Button onClick={() => push(ROUTES.DEFAULT)}>Try again</Button>
    </div>
  );
};
