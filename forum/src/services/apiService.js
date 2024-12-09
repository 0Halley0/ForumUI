import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
 
});


const endpoints = {
  SIGN_UP: "/api/users/signup/",
  SIGN_IN: "/api/users/login/",
  REFRESH_TOKEN: "/auth/refresh",
  LOGOUT: "/auth/logout",
  VERIFY_EMAIL: "/api/users/verify-email/",
  LOGIN_VERIFY: "/api/users/login-verify/",
};

const apiService = {
  signUp: (data) => apiClient.post(endpoints.SIGN_UP, data),
  signIn: (data) => apiClient.post(endpoints.SIGN_IN, data),
  refreshToken: () => apiClient.post(endpoints.REFRESH_TOKEN),
  logout: () => apiClient.post(endpoints.LOGOUT),
  verifyEmail: (token) => apiClient.post(endpoints.VERIFY_EMAIL, { token }),
  loginVerify: (token) => apiClient.post(endpoints.LOGIN_VERIFY, { token }),
};

export { apiService, endpoints };
