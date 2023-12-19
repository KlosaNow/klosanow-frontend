import axios from "axios";

// const { REACT_APP_BASE_URL } = process.env;
const axiosBaseInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_MVP,
});

axiosBaseInstance.interceptors.request.use(
  (config) => {
    //  Do something before request is sent

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);


axiosBaseInstance.interceptors.response.use(
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

export default axiosBaseInstance;
