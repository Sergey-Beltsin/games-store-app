export interface ILoginErrors {
  email: string;
  password: string;
}

export interface ILoginStore {
  loading: boolean;
  email: string;
  password: string;
  remember: boolean;
  errors: ILoginErrors;
}

export interface IOption {
  title: string;
  key: string;
}

export interface IRegisterErrors {
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
  acceptTerms: string;
}

export interface IRegisterStore {
  loading: boolean;
  country: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
  acceptTerms: boolean;
  errors: IRegisterErrors;
}

export interface IRegisterData {
  country: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}
