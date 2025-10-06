import axios from "axios";
import Cookies from "js-cookie";
import { ENV } from '../config/env';
const axiosInstance = axios.create({
  baseURL: ENV.API_URL ,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor يضيف توكن الـ Bearer من الكوكيز لكل request
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get(ENV.ACCESS_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;