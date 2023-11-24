import React from 'react';

import Icon from '@/components/ui/Icon';

import s from './styles.module.scss';

interface Props {
  onClick: () => void;
}

export const EditButton: React.FC<Props> = ({ onClick = () => {} }) => {
  return (
    <div className={s.EditButton} onClick={() => onClick()}>
      <Icon name={'ellipse'} />
      <Icon name={'edit'} className={s.button} />
    </div>
  );
};
