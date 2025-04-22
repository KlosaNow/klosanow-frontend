export const setStorageItem = (key: string, value: string) => {
  if (key) localStorage.removeItem(key);
  localStorage.setItem(key, value);
};

export const getStorageItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  } else return null;
};

export const removeStorageItem = (key: string) => localStorage.removeItem(key);
