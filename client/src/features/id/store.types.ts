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
