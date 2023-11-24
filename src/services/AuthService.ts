import { IRegistration, ReturnLoginType } from '@/types/services/AuthServiceEnteties';
import { IDataResponse } from '@/types/services/interface';
import generalRequest from '@/utils/axiosSetup';

const login = async (
  email: string,
  password: string,
): Promise<IDataResponse<ReturnLoginType | string>> => {
  try {
    const res = await generalRequest({
      method: 'POST',
      params: { email, password },
      url: 'login',
    });
    // @ts-ignore
    const user = { email, password, apiToken: res.token };

    // @ts-ignore
    localStorage.setItem('api', res.token);
    return { status: true, data: user };
  } catch (error: { data: { message: string } } | any) {
    console.log('error', error.data.message);
    return { status: false, data: error.data.message };
  }
};

const registration = async (
  registrationData: IRegistration,
): Promise<IDataResponse<null | string>> => {
  try {
    const res = await generalRequest({
      method: 'POST',
      params: registrationData,
      url: 'register',
    });

    console.log(res);

    return { status: true, data: null };
  } catch (error: { data: { message: string } } | any) {
    console.log('error', error.data.message);
    return { status: false, data: error.data.message };
  }
};

export { login, registration };
