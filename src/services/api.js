// import axios from "axios";

// const API_URL = "https://api.unitedcalculator.net/api";

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add token to requests
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("forum_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Handle auth errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("forum_token");
//       localStorage.removeItem("forum_user");
//       window.dispatchEvent(new Event("storage"));
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;

import axios from "axios";

const API_URL = "https://api.unitedcalculator.net/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("forum_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("forum_token");
      localStorage.removeItem("forum_user");
      window.dispatchEvent(new Event("storage"));
    }
    return Promise.reject(error);
  }
);
// api.js - Existing code ke saath yeh add karein
export const getThreadBySlug = (slug) => api.get(`/threads/slug/${slug}`);

export default api;
