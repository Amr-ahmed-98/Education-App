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
  const accessToken = Cookies.get(ENV.ACCESS_TOKEN_KEY);
  if (accessToken) {
    config.headers = config.headers || {}; // تأكد أنها موجودة
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
export default axiosInstance;