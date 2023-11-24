import { useRouter } from 'next/navigation';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import Icon from '@/components/ui/Icon';

import { Vacancy } from '../../interfaces';
import s from './styles.module.scss';

interface Props {
  vacancies: Vacancy[];
  editMode: boolean;
}

const VacanciesInfo: FC<Props> = ({ vacancies = [], editMode }) => {
  const { push } = useRouter();

  return vacancies.length ? (
    <div className={s.cardWrapper}>
      <AnimatedSection>
        <div className={s.headerWrapper}>
          <div className={s.mainTitle}>Vacancies:</div>
          <div className={s.subTitle}>See all</div>
        </div>
        {vacancies.map((el) => (
          <div className={s.contactWrapper} key={el.id}>
            <div className={s.titleWrapper}>{el.jobTitle}</div>
            <div
              className={s.chevronIcon}
              onClick={() => push(`/company/${el.companiesId}/${el.jobTitle}/${el.id}`)}
            >
              <Icon name="chevron" />
            </div>
          </div>
        ))}
      </AnimatedSection>
    </div>
  ) : null;
};

export default VacanciesInfo;
