import axios from 'axios';

import { API_URL } from '@/constants';

export const uploadFile = async (body: any) => {
  try {
    const { data } = await axios({
      url: API_URL + 'documents/store',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('api')}`,
        "Content-Type": "multipart/form-data",
      },
      data: body,
    });

    return data;
  } catch (error) {
    return { status: false, data: null };
  }
};
