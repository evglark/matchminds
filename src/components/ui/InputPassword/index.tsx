'use client';

import cn from 'classnames';
import { ChangeEvent, FC, useState } from 'react';

import Icon from '@/components/ui/Icon';

import s from './style.module.scss';

interface Props {
  id?: string;
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string | number;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

type IType = 'text' | 'password';

export const InputPassword: FC<Props> = ({
  id,
  name,
  label,
  className,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}) => {
  const [type, setType] = useState<IType>('password');

  const changeType = (): void => setType(type === 'password' ? 'text' : 'password');

  return (
    <div className={cn(s.wrapper, { [s.show]: type === 'text' })}>
      {label && <label>{label}</label>}
      <input
        id={id}
        name={name}
        className={cn(s.input, className)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        onBlur={onBlur}
      />
      <Icon
        name={type === 'text' ? 'eyeOpened' : 'eye'}
        className={s.eye}
        onClick={changeType}
      />
      {error && <div className={s.errorMessage}>{error}</div>}
    </div>
  );
};
