export enum AuthRole {
  COMPANY = 'company',
  CANDIDATE = 'candidate',
}

export interface IRegistration {
  email: string;
  password: string;
  name: string;
  role: AuthRole;
}

export type ReturnLoginType = {
  email: string;
  password: string;
  apiToken: string;
};
