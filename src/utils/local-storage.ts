export const getFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key);
    return value || null;
  }
  return null;
};

export const setToLocalStorage = (key: string, data: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, data);
    return true;
  }
  return false;
};

export const removeFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
    return true;
  }
  return false;
};
