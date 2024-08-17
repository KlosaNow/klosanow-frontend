import { SignInToken } from "../types/generics";

export const USER_KEY = "USER_KEY";

export const USER = () => {
  let storeL = localStorage.getItem(USER_KEY);

  if (storeL) {
    return JSON.parse(storeL);
  }

  let storeS = sessionStorage.getItem(USER_KEY);

  if (storeS) {
    return JSON.parse(storeS);
  }

  return storeS;
};

export function savedwithExp(
  value: Record<string, unknown>,
  days: number,
  storage?: "sessionStorage" | "localStorage"
) {
  const now = new Date();

  let exp = days * 86400; // secs in a day

  const item = {
    ...value,
    expiry: now.getTime() + exp,
  };

  if (storage === "sessionStorage") {
    sessionStorage.setItem(USER_KEY, JSON.stringify(value));
  } else {
    localStorage.setItem(USER_KEY, JSON.stringify(value));
  }
}

export const getToken = (key?: string): SignInToken => {
  const userKey = key || "USER_KEY";

  const signinResponse = localStorage.getItem(userKey);

  const token = JSON.parse(signinResponse as string) as SignInToken;

  return token;
};

export const getDraftId = () => localStorage.getItem("draft_id");

export const setDraftId = (id: string) => localStorage.setItem("draft_id", id);

export const clearDraftId = () => localStorage.setItem("draft_id", "");
