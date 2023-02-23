import { getFromLocalStorage } from './getFromLocalStorage';

const KEY = 'token';

// export const saveTokenToStorage = () => {};
export const getTokenFromStorage = () => getFromLocalStorage(KEY);
