import cn from 'classnames';
import { PropsWithChildren } from 'react';

import s from './styles.module.scss';

type ButtonTheme = 'clear' | 'bg';

type ButtonSize = 'lg' | 'md' | 'sm';

interface Props {
  styleType?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  type?: 'submit' | 'button';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  type = 'button',
  styleType = 'bg',
  size = 'lg',
  className,
  ...props
}) => (
  <button
    className={cn(s.simpleButton, s[styleType], s[size], className)}
    type={type}
    {...props}
    onClick={onClick}
  >
    {children}
  </button>
);
