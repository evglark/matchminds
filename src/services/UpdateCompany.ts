import { ApiResponse } from '@/types/services/HomePageServiceEnteties';
import generalRequest from '@/utils/axiosSetup';

interface Props {
  name: string;
  description: string;
  logo: string;
}

export const updateCompany = async ({ name, description, logo }: Props) => {
  try {
    const { data } = await generalRequest<ApiResponse>({
      url: 'all-companies/update',
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('api')}` },
      params: {
        Name: name,
        Description: description,
        logo,
      },
    });

    return data;
  } catch (error) {
    return { status: false, data: null };
  }
};
