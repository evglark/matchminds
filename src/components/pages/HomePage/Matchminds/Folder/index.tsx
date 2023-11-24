import { FC } from 'react';

import { Button, Title } from '@/components/ui';

import s from './styles.module.scss';

interface Props {
  whiteText: string;
  orangeText: string;
  description: string;
  buttonText?: string;
  onClick: () => void;
}

const Folder: FC<Props> = ({
  whiteText,
  orangeText,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className={s.folder}>
      <Title name="h2">
        {whiteText} <span>{orangeText}</span>
      </Title>
      <h5>{description}</h5>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
};

export default Folder;
