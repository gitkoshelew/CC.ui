export const setToLocalStorage = (key: string, data: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, data);
    return true;
  }
  return false;
};
