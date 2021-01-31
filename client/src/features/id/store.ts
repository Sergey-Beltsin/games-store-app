import { createStore, createEvent } from 'effector';

import { ILoginStore } from '@/features/id/store.types';

export const handleEmail = createEvent<string>();
export const handlePassword = createEvent<string>();
export const handleEmailError = createEvent<string>();
export const handlePasswordError = createEvent<string>();
export const handleRemember = createEvent<boolean>();

export const $login = createStore<ILoginStore>({
  email: '',
  password: '',
  remember: false,
  errors: {
    email: '',
    password: '',
  },
})
  .on(handleEmail, (state, email) => ({ ...state, email }))
  .on(handlePassword, (state, password) => ({ ...state, password }))
  .on(handleEmailError,
    (state, emailError) => ({ ...state, errors: { ...state.errors, email: emailError } }))
  .on(handlePasswordError,
    (state, passwordError) => ({ ...state, errors: { ...state.errors, password: passwordError } }))
  .on(handleRemember, (state, remember) => ({ ...state, remember }));
