export const getFromLocalStorage = (key: any) => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key);
    return value || null;
  }
  return null;
};
