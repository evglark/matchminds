'use client';

import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Title } from '@/components/ui';
import { convertImageUrl } from '@/utils/convertImageUrl';

import FeatureItem from './FeatureItem';
import s from './style.module.scss';

type ContentItem = { title: string; description: string; picture: string };
type TextItem = { whiteText: string; purpleText: string; description: string };
interface Props {
  content: ContentItem[];
  text: TextItem | null;
}

const Explore: FC<Props> = ({ content, text }) => {
  return (
    <AnimatedSection>
      <div className={s.wrapper}>
        <div className={s.explore}>
          <div className={s.textBlock}>
            <Title name="h1">
              {text?.whiteText} <span>{text?.purpleText}</span>
            </Title>
            <p className={s.text}>{text?.description}</p>
          </div>
          <div className={s.featuresList}>
            {content?.map(({ title, description, picture }, idx) => {
              return (
                <FeatureItem
                  key={`feature-${idx}`}
                  title={title}
                  text={description}
                  imageSrc={convertImageUrl(picture)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Explore;
