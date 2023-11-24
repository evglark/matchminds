import { FC, PropsWithChildren } from 'react';

import s from './styles.module.scss';

const SectionLabel: FC<PropsWithChildren> = ({ children }) => (
  <div className={s.sectionLabel}>
    <div className={s.mask} />
    <div className={s.text}>{children}</div>
  </div>
);

export default SectionLabel;
