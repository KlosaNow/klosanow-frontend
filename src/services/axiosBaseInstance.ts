import axios from "axios";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { error } from "console";

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

// const axiosBaseInstance = axios.create({
//   baseURL: import.meta.env.VITE_APP_BASE_URL_MVP,
// });

// const user = useSelector((state: RootState) => state.user);

// axiosBaseInstance.interceptors.request.use(
//   (config) => {
//     const token = user.token;
//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }
//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );
// axiosBaseInstance.interceptors.response.use(
//   function (config) {
//     return config;
//   },
//   function (error) {
//     if (error?.response?.status === 401) {
//       localStorage.clear();
//       window.location.replace("/sign-in");
//     }
//     return Promise.reject(error);
//   }
// );
export default axiosBaseInstance;
