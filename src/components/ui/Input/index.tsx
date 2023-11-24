'use client';

import cn from 'classnames';
import { ChangeEvent, FC } from 'react';

import s from './style.module.scss';

interface Props {
  id?: string;
  name: string;
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export const Input: FC<Props> = ({
  id,
  name,
  label,
  className,
  placeholder,
  value,
  type = 'text',
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className={cn(s.wrapper)}>
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
      {error && <div className={s.errorMessage}>{error}</div>}
    </div>
  );
};
