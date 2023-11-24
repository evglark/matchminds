import Image from 'next/image';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';

import s from './styles.module.scss';

interface Props {
  imgSrc: string;
}

const Banner: FC<Props> = ({ imgSrc }) => {
  return (
    <div className={s.coverWrapper}>
      <AnimatedSection>
        <Image src={imgSrc} alt={'cover'} width={844} height={406} />
      </AnimatedSection>
    </div>
  );
};

export default Banner;
