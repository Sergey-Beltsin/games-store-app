interface LoginErrors {
  email: string;
  password: string;
}

export interface ILoginStore {
  email: string;
  password: string;
  remember: boolean;
  errors: LoginErrors;
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
  country: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
  acceptTerms: boolean;
  errors: IRegisterErrors;
}

export interface IHandleRegister {
  country: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
}
