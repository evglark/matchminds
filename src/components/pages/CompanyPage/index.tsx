'use client';
import React, { FC, useState } from 'react';
import { Container } from 'react-bootstrap';

import {
  CompanyCard,
  ContactInfo,
  PersonalInfo,
  VacanciesInfo,
} from '@/components/pages/CompanyPage/LeftPanel';
import { AddNewBlock, JobsList } from '@/components/pages/CompanyPage/MainContent';
import { Button } from '@/components/ui';

import { Company, Vacancy } from './interfaces';
import s from './styles.module.scss';
import { getComponentsByType } from './utils';

interface Props {
  company: Company;
  companyFields: any;
  mainContent?: any[];
  vacancies?: Vacancy[];
  vacancyPage?: boolean;
}

const CandidatePage: FC<Props> = (props) => {
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
        {mainContent?.map((el: any) => (
          <React.Fragment key={el.id}>
            {getComponentsByType(el.type, el, editMode)}
          </React.Fragment>
        ))}
        {vacancies?.length && (
          <JobsList
            title={company.name + ' Jobs'}
            items={vacancies.map((el: any) => ({
              id: el.id.toString(),
              title: el.jobTitle,
              department: el.industry,
              departmentImg: '/images/pages/candidate/img.png',
              address: el.address,
              location: el.location,
              type: el.jobType,
              experience: el.expirience,
              date: el.updatedAt,
              rate: el.payment,
            }))}
          />
        )}
        {!vacancyPage && (
          <>
          <AddNewBlock />
          <Button onClick={() => setEditMode((e) => !e)}>
            {editMode ? 'Save changes' : 'Edit'}
          </Button>
        </>
        )}
      </div>
    </Container>
  );
};

export default CandidatePage;

export type { Company };

{
  /*
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
*/
}
