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
