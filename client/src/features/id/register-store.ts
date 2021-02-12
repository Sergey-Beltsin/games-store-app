import Router from 'next/router';
import { createEffect, createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';
import Cookies from 'js-cookie';

import { RequestService } from '@/lib/services';
import { POST } from '@/lib/services/request.service.types';
import { identityRoutes } from '@/lib/services/routes';
import { initAccountStore } from '@/features/account/store';
import {
  IRegisterData,
  IRegisterErrors,
  IRegisterStore,
} from './store.types';

export const handleRegister = createEffect(async (userData: IRegisterData) => {
  handleLoading(true);
  const data = await RequestService(identityRoutes.register, { method: POST, body: userData });
  handleLoading(false);

  if (data.isSuccess) {
    Cookies.set('token', data.message);
    Cookies.set('expiresDate', data.expiresDate);
    Cookies.set('user', data.user);
    initAccountStore(data.user);
    Router.push('/store');
  }
});

const handleLoading = createEvent<boolean>();
export const handleCountry = createEvent<string>();
export const handleFirstName = createEvent<string>();
export const handleLastName = createEvent<string>();
export const handleLogin = createEvent<string>();
export const handleEmail = createEvent<string>();
export const handlePassword = createEvent<string>();
export const handleAcceptTerms = createEvent<boolean>();
export const handleErrors = createEvent<IRegisterErrors>();

export const $register = createStore<IRegisterStore>({
  loading: false,
  country: '',
  firstName: '',
  lastName: '',
  login: '',
  email: '',
  password: '',
  acceptTerms: false,
  errors: {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    acceptTerms: '',
  },
})
  .on(handleLoading, (state, loading) => ({ ...state, loading }))
  .on(handleCountry, (state, country) => ({ ...state, country }))
  .on(handleFirstName, (state, firstName) => ({ ...state, firstName }))
  .on(handleLastName, (state, lastName) => ({ ...state, lastName }))
  .on(handleLogin, (state, login) => ({ ...state, login }))
  .on(handleEmail, (state, email) => ({ ...state, email }))
  .on(handlePassword, (state, password) => ({ ...state, password }))
  .on(handleAcceptTerms, (state, acceptTerms) => ({ ...state, acceptTerms }))
  .on(handleErrors, (state, errors) => ({ ...state, errors }));

export const useRegisterStore = () => useStore<IRegisterStore>($register);
