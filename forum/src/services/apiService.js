import axios from "axios";

const API_BASE_URL = "http://localhost:8000/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


const endpoints = {
  SIGN_UP: "/api/users/signup/",
  SIGN_IN: "/api/users/login/",
  REFRESH_TOKEN: "/auth/refresh",
  LOGOUT: "/auth/logout",
};

const apiService = {
  signUp: (data) => apiClient.post(endpoints.SIGN_UP, data),
  signIn: (data) => apiClient.post(endpoints.SIGN_IN, data),
  refreshToken: () => apiClient.post(endpoints.REFRESH_TOKEN),
  logout: () => apiClient.post(endpoints.LOGOUT),
};

export { apiService, endpoints };
