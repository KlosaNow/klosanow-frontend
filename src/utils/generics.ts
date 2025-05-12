import { ChatListData } from "src/types";

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

export const removeDuplicatesPreferWithId = (
  items: ChatListData[]
): ChatListData[] => {
  const map = new Map<string | undefined, ChatListData>();

  for (const item of items) {
    const key = item.slug;
    const existing = map.get(key);

    if (!existing) {
      map.set(key, item);
    } else if (!existing.id && item.id) {
      map.set(key, item);
    }
  }

  return Array.from(map.values());
};
