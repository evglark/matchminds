import { ApiResponse } from '@/types/services/HomePageServiceEnteties';
import generalRequest from '@/utils/axiosSetup';

interface Props {
  companiesId: string | number;
  id: string | number;
  type: string;
  json: string;
  file?: string;
}

export const updateBlock = async ({ type, json, id, companiesId }: Props) => {
  try {
    const { data } = await generalRequest<ApiResponse>({
      url: 'company-blocks/update',
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('api')}` },
      params: { type, json, id, companies_id: companiesId },
    });

    return data;
  } catch (error) {
    return { status: false, data: null };
  }
};
