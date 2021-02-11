import { createEffect, createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

import { axios } from '@/lib/axios';

import { IHandleRegister, IRegisterErrors, IRegisterStore } from './store.types';

export const handleRegister = createEffect(async (data: IHandleRegister): void => {
  try {
    const res = await axios.post('/api/identity/register', data);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
});

export const handleCountry = createEvent<string>();
export const handleFirstName = createEvent<string>();
export const handleLastName = createEvent<string>();
export const handleLogin = createEvent<string>();
export const handleEmail = createEvent<string>();
export const handlePassword = createEvent<string>();
export const handleAcceptTerms = createEvent<boolean>();
export const handleErrors = createEvent<IRegisterErrors>();

export const $register = createStore<IRegisterStore>({
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
  .on(handleCountry, (state, country) => ({ ...state, country }))
  .on(handleFirstName, (state, firstName) => ({ ...state, firstName }))
  .on(handleLastName, (state, lastName) => ({ ...state, lastName }))
  .on(handleLogin, (state, login) => ({ ...state, login }))
  .on(handleEmail, (state, email) => ({ ...state, email }))
  .on(handlePassword, (state, password) => ({ ...state, password }))
  .on(handleAcceptTerms, (state, acceptTerms) => ({ ...state, acceptTerms }))
  .on(handleErrors, (state, errors) => ({ ...state, errors }));

export const useRegisterStore = () => useStore<IRegisterStore>($register);
