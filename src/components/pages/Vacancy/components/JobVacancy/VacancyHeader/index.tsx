import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';

import s from './styles.module.scss';

interface Props {
  vacancy: {
    title: string;
    rate: string;
    date: string;
    department: string;
    location: string;
    time: string;
    type: string;
    experience: string;
  };
}

const VacancyHeader: FC<Props> = (props) => {
  const {
    vacancy: { title, rate, date, department, location, time, type, experience },
  } = props;

  return (
    <div className={s.coverWrapper}>
      <AnimatedSection>
        <div className={s.spaceBetween}>
          <div className={s.titleWrapper}>{title}</div>
          <div className={s.dateWrapper}>{date}</div>
        </div>
        <div className={s.spaceBetween}>
          <div className={s.rateWrapper}>{rate}</div>
          <div className={s.departmentWrapper}>{department}</div>
        </div>
        <div className={s.descWrapper}>
          <div className={s.title}>{location}</div>
          <div className={s.separator} />
          <div className={s.title}>{time}</div>
          <div className={s.separator} />
          <div className={s.title}>{type}</div>
        </div>
        <div className={s.experienceWrapper}>
          <div className={s.experienceTitleWrapper}>Work experience:</div>
          <div className={s.experienceValueWrapper}>{experience}</div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default VacancyHeader;
