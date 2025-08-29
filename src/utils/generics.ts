import { ChatListData } from "src/types";
import { FileUrlKey } from "src/types/generics";
import { clearFileUrl, getFileUrl } from "./constant";
import { deletedFile, FileUploadResponseStatus } from "./file-upload";

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

  const list = Array.from(map.values());
  const sortedList = list.sort((a, b) => {
    const aLastMsgTime = new Date(a.last_msg_time);
    const bLastMsgTime = new Date(b.last_msg_time);

    return bLastMsgTime.getTime() - aLastMsgTime.getTime();
  });

  return sortedList;
};

export const clearIncompleteStorageFile = async (
  fileType: FileUrlKey,
  toastAction: (error: string) => void
) => {
  const fileValue = getFileUrl(fileType);
  try {
    if (fileValue) {
      const res = await deletedFile(fileValue);

      if (!res || res.status !== FileUploadResponseStatus.Success)
        throw new Error("Unable to delete file");

      if (res.status === FileUploadResponseStatus.Success) {
        clearFileUrl(fileType);
      }
    }
  } catch (error: any) {
    toastAction(
      error.response?.data?.errors[0]?.detail ||
        error.message ||
        error.response.statusText
    );
  }
};
