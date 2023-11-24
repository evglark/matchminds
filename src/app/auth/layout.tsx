import { ReactNode } from 'react';

import s from './layout.module.scss';

interface Props {
  children: ReactNode;
}

const AuthLayout = async ({ children }: Props): Promise<JSX.Element> => {
  return (
    <div className={s.authLayoutWrapper}>
      <div className={s.mask} />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
