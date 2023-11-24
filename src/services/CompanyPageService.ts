import { ApiResponse } from '@/types/services/HomePageServiceEnteties';
import generalRequest from '@/utils/axiosSetup';

export const getCompanyPageData = async (companyId: string) => {
  try {
    const { data } = await generalRequest<ApiResponse>({
      url: 'all-companies',
      params: { id: companyId },
    });

    return data;
  } catch (error) {
    return { status: false, data: null };
  }
};
