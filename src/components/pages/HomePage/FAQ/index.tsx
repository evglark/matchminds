import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Accordion, Title } from '@/components/ui';

import s from './styles.module.scss';

type ContentItem = { question: string; answer: string };
type TextItem = { whiteTitle: string; purpleTitle: string };
interface Props {
  content: ContentItem[];
  text: TextItem | null;
}

const FAQ: FC<Props> = ({ text, content }) => {
  return (
    <AnimatedSection>
      <div className={s.faq}>
        <div className={s.content}>
          <div className={s.textBlock}>
            <Title name="h1">
              {text?.whiteTitle} <span>{text?.purpleTitle}</span>
            </Title>
            <div className={s.accordionContent}>
              {content?.map(({ answer, question }, idx) => (
                <Accordion key={`accordion-${idx}`} answer={answer} question={question} />
              ))}
            </div>
          </div>
          <figure className={s.imageContent}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pages/home/faq/globe.png" alt="hands" />
          </figure>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;
