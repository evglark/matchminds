import cn from 'classnames';
import { ChangeEvent, FC, PropsWithChildren, ReactNode } from 'react';

import s from './style.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
  checked: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  checked,
  disabled,
  error,
  onChange,
}) => {
  return (
    <label className={cn(s.label, className)}>
      <input
        className={s.nativeCheckbox}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      <span
        className={cn(
          s.checkbox,
          { [s.checked]: checked, [s.error]: error },
          { [s.disabled]: disabled },
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={s.check}
          width={10}
          height={8}
          alt="checked"
          src="/images/pages/auth/checked.png"
        />
      </span>
      <span className={s.text}>{children}</span>
    </label>
  );
};
