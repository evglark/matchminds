'use client';

import { SessionProvider as Session, SessionProviderProps } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';

const SessionProvider: FC<PropsWithChildren<SessionProviderProps>> = ({
  children,
  session,
}) => {
  return <Session session={session}>{children}</Session>;
};

export default SessionProvider;
