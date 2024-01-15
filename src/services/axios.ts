import Axios from "axios";
import { USER } from "./constant";

export const _token = USER()?.token || "";

const AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_MVP,
  headers: {
    "Content-Type": "application/json",
    ...(_token && { Authorization: `Bearer ${_token}` }),
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error?.response?.status === 401) {
      localStorage.clear();
      window.location.replace("/sign-in");
    }
    return Promise.reject(error);
  }
);

export { AxiosInstance };
