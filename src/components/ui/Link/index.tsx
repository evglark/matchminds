import cn from 'classnames';
import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';

import s from './styles.module.scss';

interface Props {
  href: string;
  onClick?: () => void;
  className?: string;
}

export const Link: FC<PropsWithChildren<Props>> = (props) => {
  const { children, href, onClick, className } = props;
  return (
    <NextLink href={href} className={cn(s.textLink, className)} onClick={onClick}>
      {children}
    </NextLink>
  );
};
