'use client';
import { FC, useEffect, useState } from 'react';

import FadeInOutContainer from '@/components/animated/FadeInOutContainer';
import CompanyPage, { Company } from '@/components/pages/CompanyPage';
import { getCompanyPageData } from '@/services/CompanyPageService';
import { getAllVacancy } from '@/services/VacancyService';

interface Props {
  params: {
    id: string;
  };
}

interface DataProps {
  company: Company;
  companyFields: any;
  companyBloks: {
    data: any[];
  };
}

const Company: FC<Props> = ({ params: { id } }) => {
  const [data, setData] = useState<DataProps | null>(null);
  const [vacancies, setVacancies] = useState<any>(null);

  useEffect(() => {
    (async (): Promise<void> => {
      const res = await getCompanyPageData(id);
      setData(res as unknown as DataProps);
    })();

    (async (): Promise<void> => {
      const res = await getAllVacancy({ companyId: id });
      setVacancies(res as unknown);
    })();
  }, []);
  console.log(1);

  return (
    <FadeInOutContainer key="company">
      {data?.company?.id ? (
        <CompanyPage
          company={data.company}
          companyFields={data.companyFields.data}
          // @ts-ignore
          mainContent={data.companyBloks.data}
          vacancies={vacancies}
        />
      ) : null}
    </FadeInOutContainer>
  );
};

export default Company;
