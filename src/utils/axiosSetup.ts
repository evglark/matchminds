/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestHeaders, Method } from 'axios';

import { API_URL } from '@/constants';
import { IRequestCallbacks } from '@/types/services/interface';
import { mapToBusinessEntity } from '@/utils/mapDtoJsonToBusinessObject';
import { mapToServerEntity } from '@/utils/mapDtoJsonToServerObject';

interface IGeneralRequestData {
  [index: string]: any;
}

interface IGeneralRequestParams {
  [index: string]: any;
}

interface IGeneralRequestConfig<T> extends IRequestCallbacks<T> {
  url: string;
  method?: Method;
  data?: IGeneralRequestData;
  params?: IGeneralRequestParams;
  headers?: 'none' | AxiosRequestHeaders | Record<string, any>;
}

// const ignoredErrorCodes = [];

const client = axios.create({});

client.interceptors.request.use((config) => {
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

const generalRequest = async <T>(config: IGeneralRequestConfig<T>): Promise<T> => {
  const { successCallback, errorCallback } = config;
  let { headers } = config;

  if (headers === 'none' || headers === undefined) headers = {};

  if (!Object.prototype.hasOwnProperty.call(headers, 'Content-Type')) {
    headers['Content-Type'] = 'application/json;charset=utf-8';
  }
  if (headers['Content-Type'] === '') delete headers['Content-Type'];

  const onSuccess = (response: { data: any }) => {
    const { data } = response;
    const formedData = typeof data !== 'object' ? data : mapToBusinessEntity(data);
    successCallback?.(formedData);
    return formedData;
  };

  const onError = async (error: AxiosError<any>) => {
    // if (
    //   *** PRESET IGNORE CODES ***
    //   !ignoredErrorCodes.includes(error?.response?.status ?? 0)
    //   ) {
    //        *** SHOW NOTIFICATION ***
    //   }
    // }
    errorCallback?.(error);

    return Promise.reject(error.response);
  };

  return client({
    baseURL: API_URL,
    url: config.url,
    method: config.method ?? 'GET',
    params: config.params,
    data: { data: mapToServerEntity(config.data) },
    headers: headers,
  })
    .then(onSuccess)
    .catch(onError);
};

export default generalRequest;
