import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { convertImageUrl } from '@/utils/convertImageUrl';

import { EditButton } from '../../components';
import s from './styles.module.scss';

interface Props {
  imgSrc: string;
  editMode: boolean;
  data: any;
}

const Cover: FC<Props> = ({ imgSrc = '', editMode }) => {
  const [editCover, setEditCover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.click();
  }, [editCover]);

  return (
    <div className={s.coverWrapper}>
      <AnimatedSection>
        {editMode && (
          <div className={s.editButtonWrapper}>
            <EditButton onClick={() => setEditCover((e) => !e)} />
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
        )}
        <Image src={convertImageUrl(imgSrc)} alt={'cover'} width={844} height={232} />
      </AnimatedSection>
    </div>
  );
};

export default Cover;
