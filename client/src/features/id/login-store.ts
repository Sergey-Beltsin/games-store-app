import Router from 'next/router';
import { createStore, createEvent, createEffect } from 'effector';
import { useStore } from 'effector-react';
import Cookies from 'js-cookie';

import { RequestService } from '@/lib/services';
import { POST } from '@/lib/services/request.service.types';
import { identityRoutes } from '@/lib/services/routes';
import { initAccountStore } from '@/features/account/store';
import { ILoginData, ILoginErrors, ILoginStore } from './store.types';

export const handleLogin = createEffect(async (userData: ILoginData) => {
  handleLoading(true);
  const data = await RequestService(identityRoutes.login, { method: POST, body: userData });
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
export const handleEmail = createEvent<string>();
export const handlePassword = createEvent<string>();
export const handleErrors = createEvent<ILoginErrors>();
export const handleRemember = createEvent<boolean>();

export const $login = createStore<ILoginStore>({
  loading: false,
  email: '',
  password: '',
  remember: false,
  errors: {
    email: '',
    password: '',
  },
})
  .on(handleLoading, (state, loading) => ({ ...state, loading }))
  .on(handleEmail, (state, email) => ({ ...state, email }))
  .on(handlePassword, (state, password) => ({ ...state, password }))
  .on(handleErrors, (state, errors) => ({ ...state, errors }))
  .on(handleRemember, (state, remember) => ({ ...state, remember }));

export const useLoginStore = () => useStore<ILoginStore>($login);
