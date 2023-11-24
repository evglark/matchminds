'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Button, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';

import s from './styles.module.scss';

type TextItem = {
  whiteTitle: string;
  purpleTitle: string;
  text: string;
  bottonText: string;
};
interface Props {
  text: TextItem | null;
}

const FindToday: FC<Props> = ({ text }) => {
  const { push } = useRouter();

  if (text !== null) {
    const {
      whiteTitle = '',
      purpleTitle = '',
      text: textContent = '',
      bottonText = '',
    } = text;

    const keyWord = 'MATCHMINDS';
    const textContentArr = textContent.split(keyWord);

    return (
      <AnimatedSection>
        <div className={s.findToday}>
          <div className={s.contentWrapper}>
            <Title name="purpleH2">
              {whiteTitle} <span>{purpleTitle}</span>
            </Title>
            <div className={s.content}>
              <p>
                {textContentArr[0]}
                <span>{keyWord}</span>
                {textContentArr[1]}
              </p>
              <Button
                styleType="bg"
                onClick={() => {
                  push(`${ROUTES.AUTH.REGISTRATION}?role=candidate`);
                }}
              >
                {bottonText}
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  } else {
    return null;
  }
};

export default FindToday;
