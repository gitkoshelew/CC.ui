import {
  getFromLocalStorage,
  removeFromStorage,
  setToLocalStorage,
} from './local-storage';

const KEY = 'token';

export const saveTokenToStorage = (data: string) =>
  setToLocalStorage(KEY, data);

export const getTokenFromStorage = () => getFromLocalStorage(KEY);

export const removeTokenFromStorage = () => removeFromStorage(KEY);
