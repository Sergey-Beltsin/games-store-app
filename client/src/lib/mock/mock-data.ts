import { STORE_NAME } from '@/lib/constants/common';

interface ILoginMethod {
  logo: string;
  title: string;
  loginHref: string;
  registerHref: string;
}

export const LOGIN_METHODS: ILoginMethod[] = [
  {
    logo: 'Logo',
    title: STORE_NAME,
    loginHref: 'login/epic',
    registerHref: 'register/epic',
  },
];
