import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { IAccountStore } from '@/features/account/store.types';

export const initAccountStore = createEvent<IAccountStore>();
export const resetAccountStore = createEvent();

const $account = createStore<IAccountStore>({
  email: '',
  login: '',
  firstName: '',
  lastName: '',
  country: '',
})
  .on(initAccountStore, (_, payload) => ({ ...payload }))
  .reset(resetAccountStore);

export const useAccountStore = () => useStore($account);
