import { ApiResponse } from '@/types/services/HomePageServiceEnteties';
import generalRequest from '@/utils/axiosSetup';

export const getAllVacancy = async ({ companyId }: { companyId: string }) => {
  try {
    const { data } = await generalRequest<ApiResponse>({
      url: 'all-vacancies',
      params: { company_id: companyId },
    });

    return data;
  } catch (error) {
    return { status: false, data: null };
  }
};

export const getVacancyByID = async ({ vacancyId }: { vacancyId: string }) => {
  try {
    const { data } = await generalRequest<ApiResponse>({
      url: 'all-vacancies/get_by_id',
      params: { id: vacancyId },
    });

    return data;
  } catch (error) {
    return { status: false, data: null };
  }
};
