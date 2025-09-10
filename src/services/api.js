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
  timeout: 10000, // 10 second timeout
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

// Handle response errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === "ECONNABORTED") {
      // Handle timeout error
      error.response = {
        status: 408,
        data: { message: "Request timeout. Please try again." },
      };
    } else if (!error.response) {
      // Handle network errors
      error.response = {
        status: 500,
        data: { message: "Network error. Please check your connection." },
      };
    }

    // Handle specific status codes
    if (error.response.status === 401) {
      localStorage.removeItem("forum_token");
      localStorage.removeItem("forum_user");
      window.dispatchEvent(new Event("storage"));
    } else if (error.response.status === 404) {
      error.response.data.message = "Resource not found";
    } else if (error.response.status >= 500) {
      error.response.data.message = "Server error. Please try again later.";
    }

    return Promise.reject(error);
  }
);

export default api;
