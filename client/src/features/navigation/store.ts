import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';

interface State {
  isNavOpen: boolean;
  isUserNavOpen: boolean;
  isTransOpen: boolean;
  isSearchOpened: boolean;
  isExploreOpen: boolean;
  search: string;
}

export const handleOpenNav = createEvent<boolean>();
export const handleOpenUserNav = createEvent<boolean>();
export const handleOpenTrans = createEvent<boolean>();
export const handleOpenSearch = createEvent<boolean>();
export const handleOpenExplore = createEvent<boolean>();
export const handleSearch = createEvent<string>();

export const $navigation = createStore<State>({
  isNavOpen: false,
  isUserNavOpen: false,
  isTransOpen: false,
  isSearchOpened: false,
  isExploreOpen: false,
  search: '',
})
  .on(handleOpenNav, (state, isOpen) => ({ ...state, isNavOpen: isOpen }))
  .on(handleOpenUserNav, (state, isOpen) => ({ ...state, isUserNavOpen: isOpen }))
  .on(handleOpenTrans, (state, isOpen) => ({ ...state, isTransOpen: isOpen }))
  .on(handleOpenSearch, (state, isOpen) => ({ ...state, isSearchOpened: isOpen }))
  .on(handleOpenExplore, (state, isOpen) => ({ ...state, isExploreOpen: isOpen }))
  .on(handleSearch, (state, currentSearch) => ({ ...state, search: currentSearch }));

export const useNavigationStore = () => useStore($navigation);
