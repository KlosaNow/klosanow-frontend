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
