'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import SectionLabel from '@/components/pages/HomePage/common/SectionLabel';
import { Title } from '@/components/ui';
import ROUTES from '@/constants/routes';
import { convertImageUrl } from '@/utils/convertImageUrl';

import Folder from './Folder';
import s from './styles.module.scss';

type ContentItem = {
  whiteText: string;
  orandeText: string;
  description: string;
  bottonText: string;
};
type TextItem = { tip: string; headerTextWhite: string; headerTextPurple: string };
interface Props {
  content: ContentItem[];
  text: TextItem | null;
  video: string;
}

const Matchminds: FC<Props> = ({ text, content, video }) => {
  const { push } = useRouter();
  // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  // src="https://admin.matchminds.club/storage/CAILI48Lo8g5ArWS8QJFcH8zSjTRvgbHr07ghBKO.mp4"

  return (
    <AnimatedSection>
      <div className={s.wrapper}>
        <div className={s.matchminds}>
          <div className={s.flexWrapper}>
            <div className={s.textBlock}>
              <SectionLabel>{text?.tip}</SectionLabel>
              <Title name="h1">
                {text?.headerTextWhite} <span>{text?.headerTextPurple}</span>
              </Title>
            </div>
            <div className={s.videoWrapper}>
              {video && (
                <video controls autoPlay>
                  <source src={convertImageUrl(video)} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
          <div className={s.folderBlock}>
            {content.map(({ whiteText, orandeText, description, bottonText }, idx) => (
              <Folder
                key={`folder-${idx}`}
                whiteText={whiteText}
                orangeText={orandeText}
                description={description}
                buttonText={bottonText}
                onClick={() => {
                  push(
                    `${ROUTES.AUTH.REGISTRATION}?role=${
                      idx === 1 ? 'company' : 'candidate'
                    }`,
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Matchminds;
