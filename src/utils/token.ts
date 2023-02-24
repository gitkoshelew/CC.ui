import { getFromLocalStorage } from './getFromLocalStorage';
import { setToLocalStorage } from './setToLocalStorage';

const KEY = 'token';

export const saveTokenToStorage = (data: string) =>
  setToLocalStorage(KEY, data);
export const getTokenFromStorage = () => getFromLocalStorage(KEY);
