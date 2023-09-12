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
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default axiosBaseInstance;
