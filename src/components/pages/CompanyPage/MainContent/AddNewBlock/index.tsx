'use client';
import { FC, useEffect, useRef, useState } from 'react';

import Icon from '@/components/ui/Icon';
import { useClickOutside } from '@/hooks/useClickOutside';

import s from './styles.module.scss';

const AddNewBlock: FC = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const menuItems = [
    { title: 'Text', icon: 'T' },
    { title: 'Text with Heading', icon: 'Tt' },
    { title: 'Image', icon: <Icon name="image" /> },
    { title: '(Right) Text and Image', icon: <Icon name="textImgR" /> },
    { title: '(Left) Text and Image', icon: <Icon name="textImgL" /> },
  ];

  useClickOutside(modalRef, () => setModal(false));

  return (
    <div className={s.newBlockWrapper}>
      <div className={s.separator} />
      <div className={s.buttonWrapper} onClick={() => setModal((s) => !s)}>
        Add Block
        {modal && (
          <div className={s.modalWrapper} ref={modalRef}>
            {menuItems.map((el) => (
              <div className={s.modalItemWrapper} key={el.title}>
                <div className={s.modalItemIconWrapper}>{el.icon}</div>
                <div className={s.modalItemTitleWrapper}>{el.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={s.separator} />
    </div>
  );
};

export default AddNewBlock;
