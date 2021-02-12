import { AxiosResponse } from 'axios';

export const GET = 'GET';
export const POST = 'POST';

type Method = 'GET' | 'POST';

export interface IConfig {
  method?: Method;
  body?: object;
}

interface IUser {
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  country: string;
}

export interface IData {
  errors: string[] | null;
  expiresDate: string | null;
  isSuccess: boolean;
  message: string;
  user: IUser | null;
}

export interface IResponse extends AxiosResponse {
  data: IData;
}
