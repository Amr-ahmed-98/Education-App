// import axios from "axios";
// import {ENV} from "../config/env";

// const ApiClient = axios.create({
//     baseURL: ENV.API_URL,
//     timeout: 5000,
//     headers:{
//         "Content-Type": "application/json",
//     }

// })

// // إضافة Interceptors (لو عايز تضيف توكن أو تعمل refresh token)
// // apiClient.interceptors.request.use(
// //   (config) => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //     }
// //     return config;
// //   },
// //   (error) => Promise.reject(error)
// // );

// export default ApiClient;