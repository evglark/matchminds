'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import ListItemWithIcon from '@/components/pages/HomePage/common/ListItemWithIcon';
import SectionLabel from '@/components/pages/HomePage/common/SectionLabel';
import { Button, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';
import { convertImageUrl } from '@/utils/convertImageUrl';

import s from './styles.module.scss';

type ContentItem = { title: string; text: string; image: string };
type TextItem = {
  callToActionTitle: string;
  whiteTitle: string;
  purpleTitle: string;
  bottonText: string;
};
interface Props {
  content: ContentItem[];
  text: TextItem | null;
}

const FindWork: FC<Props> = ({ text, content }) => {
  const { push } = useRouter();
  return (
    <AnimatedSection>
      <div className={s.wrapper}>
        <div className={s.greatWork}>
          <div className={s.content}>
            <div className={s.textBlock}>
              <div className={s.showLabel}>
                <SectionLabel>{text?.callToActionTitle}</SectionLabel>
              </div>
              <Title name="h1">
                {text?.whiteTitle} <span>{text?.purpleTitle}</span>
              </Title>
              <div className={s.textContent}>
                {content?.map(({ image, text, title }, idx) => (
                  <ListItemWithIcon
                    key={`item-${idx}`}
                    imageSrc={convertImageUrl(image)}
                    text={text}
                    title={title}
                  />
                ))}
              </div>
              <Button
                onClick={() => {
                  push(`${ROUTES.AUTH.REGISTRATION}?role=company`);
                }}
              >
                {text?.bottonText}
              </Button>
            </div>
            <figure className={s.imageContent}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pages/home/greatWork/hands.png" alt="hands" />
            </figure>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FindWork;
