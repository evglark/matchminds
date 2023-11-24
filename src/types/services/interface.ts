/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IMeta {
  pagination: ICommonPagination;
}

export type ISuccessCallbackType<T> = (data: T) => void;
export type IErrorCallbackType = (error: any) => void;

export interface IRequestCallbacks<T> {
  successCallback?: ISuccessCallbackType<T>;
  errorCallback?: IErrorCallbackType;
}

export interface ICommonPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IDataResponse<T> {
  data: T;
  status: boolean;
}
