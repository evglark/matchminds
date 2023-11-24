import cn from 'classnames';
import { FC, PropsWithChildren, ReactNode } from 'react';

import s from './styles.module.scss';

interface Props {
  className?: string;
  name: keyof typeof titles;
}

// pageH1 uses only once on the page
// other keys are equal the name of mixin from scss and from figma

const titles = {
  pageH1: (children: ReactNode, className?: string) => (
    <h1 className={cn(s.pageH1, className)}>{children}</h1>
  ),
  h1: (children: ReactNode, className?: string) => (
    <h2 className={cn(s.h1, className)}>{children}</h2>
  ),
  h2: (children: ReactNode, className?: string) => (
    <h2 className={cn(s.h2, className)}>{children}</h2>
  ),
  purpleH2: (children: ReactNode, className?: string) => (
    <h2 className={cn(s.purpleH2, className)}>{children}</h2>
  ),
};

export const Title: FC<PropsWithChildren<Props>> = ({ children, name, className }) => {
  return titles[name](children, className);
};
