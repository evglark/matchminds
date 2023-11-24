'use client';
import { FC, useEffect, useState } from 'react';

import VacancyPage, { Company } from '@/components/pages/Vacancy';
import { getCompanyPageData } from '@/services/CompanyPageService';
import { getVacancyByID } from '@/services/VacancyService';

interface Props {
  params: {
    id: string;
    vacancy: string;
    vacancyId: string;
  };
}

interface DataProps {
  company: Company;
  companyFields: any;
}

const Vacancy: FC<Props> = ({ params: { id, vacancy, vacancyId } }) => {
  const [data, setData] = useState<DataProps | null>(null);
  const [vacancyData, setVacancyData] = useState(null);

  useEffect(() => {
    (async (): Promise<void> => {
      const res = await getCompanyPageData(id);
      setData(res as unknown as DataProps);
    })();

    (async (): Promise<void> => {
      const res = await getVacancyByID({ vacancyId });
      // @ts-ignore
      setVacancyData(res as unknown);
    })();
  }, []);

  return (
    <div className="vacancy-page">
      {data?.company?.id ? (
        <VacancyPage
          company={data.company}
          companyFields={data.companyFields.data}
          vacancyPage
        />
      ) : null}
      {vacancy}
    </div>
  );
};

export default Vacancy;
