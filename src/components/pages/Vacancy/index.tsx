'use client';
import React, { FC, useState } from 'react';
import { Container } from 'react-bootstrap';

import {
  CompanyCard,
  ContactInfo,
  PersonalInfo,
  VacanciesInfo,
} from '@/components/pages/CompanyPage/LeftPanel';

import { Company, Vacancy } from '../CompanyPage/interfaces';
import s from '../CompanyPage/styles.module.scss';
import { VacancyHeader } from './components/JobVacancy';

interface Props {
  company: Company;
  companyFields: any;
  mainContent?: any[];
  vacancies?: Vacancy[];
  vacancyPage?: boolean;
}

const VacancyPage: FC<Props> = (props) => {
  const { company, companyFields, mainContent, vacancies, vacancyPage } = props;
  const { id, name, description } = company;
  const [editMode, setEditMode] = useState(false);

  const getContactInfoByArr = (arr: string[]) =>
    arr
      .map((item: string) => companyFields?.find((el: any) => el.title === item) ?? false)
      .filter((el) => el);

  const getContactInfo = () => getContactInfoByArr(['Phone', 'Email', 'Telegram']);

  const getPersonalInfo = () => getContactInfoByArr(['Location', 'Industry']);

  return (
    <Container className={s.container}>
      <div className={s.left}>
        <CompanyCard
          id={id.toString()}
          title={name}
          desc={description}
          imgSrc={company.logo}
          editMode={editMode}
          data={company}
        />
        {vacancies?.length && <VacanciesInfo vacancies={vacancies} editMode={editMode} />}
        <PersonalInfo items={getPersonalInfo()} editMode={editMode} />
        <ContactInfo items={getContactInfo()} editMode={editMode} />
      </div>
      <div className={s.right}>
        <VacancyHeader
          vacancy={{
            title: 'Fullstack',
            rate: '3000$',
            date: 'September 25',
            department: 'Information Technology / IT',
            location: 'Berlin',
            time: 'Fulltime',
            type: 'Remote',
            experience: '2 - 3 years',
          }}
        />
      </div>
    </Container>
  );
};

export default VacancyPage;

export type { Company };
