import { ApiResponse } from '@/types/services/HomePageServiceEnteties';
import generalRequest from '@/utils/axiosSetup';

interface Props {
  companiesId: string | number;
  id: string | number;
  title: string;
  value: string;
}

export const updateFields = async ({ companiesId, id, title, value }: Props) => {
  try {
    const { data } = await generalRequest<ApiResponse>({
      url: 'company-fields/update',
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('api')}` },
      params: {
        companies_id: companiesId,
        id,
        Title: title,
        Value: value,
      },
    });

    return data;
  } catch (error) {
    return { status: false, data: null };
  }
};
