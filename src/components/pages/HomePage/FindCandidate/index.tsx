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

const FindCandidate: FC<Props> = ({ text, content }) => {
  const { push } = useRouter();
  return (
    <AnimatedSection>
      <div className={s.wrapper}>
        <div className={s.yourWay}>
          <div className={s.showForDesktop}>
            <SectionLabel>{text?.callToActionTitle}</SectionLabel>
          </div>
          <div className={s.content}>
            <div className={s.textBlock}>
              <div className={s.showForMobile}>
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
                  push(`${ROUTES.AUTH.REGISTRATION}?role=candidate`);
                }}
              >
                {text?.bottonText}
              </Button>
            </div>
            <figure className={s.imageContent}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pages/home/yourWay/movie.png" alt="movie" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={s.playBtn}
                src="/images/pages/home/yourWay/play_btn.svg"
                alt="play"
                width={89}
                height={88}
              />
            </figure>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FindCandidate;
