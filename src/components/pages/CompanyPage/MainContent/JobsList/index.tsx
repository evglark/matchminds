import Image from 'next/image';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Button } from '@/components/ui';

import s from './styles.module.scss';

interface Props {
  title: string;
  items: {
    id: string;
    department: string;
    departmentImg: string;
    address: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    date: string;
    rate: string;
  }[];
}

const JobsList: FC<Props> = ({ title, items }) => {
  return (
    <div className={s.listWrapper}>
      <AnimatedSection>
        <div className={s.titleWrapper}>{title}</div>
        {items.map((el) => (
          <div className={s.jobCard} key={el.id}>
            <div className={s.headerCard}>
              <div className={s.departmentWrapper}>
                <div className={s.imgWrapper}>
                  <Image src={''} alt={''} width={40} height={40} />
                </div>
                <div className={s.titleDepartmentWrapper}>
                  {JSON.parse(el.department).industry}
                </div>
              </div>
              <div className={s.dateWrapper}>{el.date}</div>
            </div>
            <div className={s.contentWrapper}>
              <div className={s.mainWrapper}>
                <div className={s.titleWrapper}>{el.title}</div>
                <div className={s.descWrapper}>
                  <div className={s.title}>{el.address}</div>
                  <div className={s.separator} />
                  <div className={s.title}>{JSON.parse(el.type)['job type']}</div>
                  <div className={s.separator} />
                  <div className={s.title}>{JSON.parse(el.location).location}</div>
                </div>
                <div className={s.experienceWrapper}>
                  <div className={s.experienceTitleWrapper}>Work experience:</div>
                  <div className={s.experienceValueWrapper}>
                    {JSON.parse(el.experience).experience}
                  </div>
                </div>
              </div>
              <div className={s.rateWrapper}>{JSON.parse(el.rate).payment}</div>
            </div>
            <div className={s.buttonWrapper}>
              <Button onClick={() => console.log(1)} size="md">
                Apply now
              </Button>
            </div>
          </div>
        ))}
        <div className={s.seeMoreBtnWrapper}>
          <Button onClick={() => console.log(1)} className={s.seeMoreBtn}>
            See more
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default JobsList;
