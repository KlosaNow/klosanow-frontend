import axios from "axios";

// const { REACT_APP_BASE_URL } = process.env;
const axiosBaseInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,

  headers: {},
});

export default axiosBaseInstance;
