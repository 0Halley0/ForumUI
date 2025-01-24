import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("access");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const endpoints = {
  SIGN_UP: "/api/users/signup/",
  SIGN_IN: "/api/users/login/",
  REFRESH_TOKEN: "/auth/refresh",
  LOGOUT: "/auth/logout",
  VERIFY_EMAIL: "/api/users/verify-email/",
  LOGIN_VERIFY: "/api/users/login-verify/",
  GET_ARTICLES: "/api/article/articles/",
  GET_ARTICLE_BY_ID: "/api/article/articles/{id}/",
  POST_ARTICLE: "/api/article/articles/",
  PUT_ARTICLE: "/api/article/articles/{id}/",
  PATCH_ARTICLE: "/api/article/articles/{id}/",
  DELETE_ARTICLE: "/api/article/articles/{id}/",
};

const apiService = {
  signUp: (data) => apiClient.post(endpoints.SIGN_UP, data),
  signIn: (data) => apiClient.post(endpoints.SIGN_IN, data),
  refreshToken: () => apiClient.post(endpoints.REFRESH_TOKEN),
  logout: () => apiClient.post(endpoints.LOGOUT),
  verifyEmail: (token) => apiClient.post(endpoints.VERIFY_EMAIL, { token }),
  loginVerify: (token) => apiClient.post(endpoints.LOGIN_VERIFY, { token }),
  getArticles: () => apiClient.get(endpoints.GET_ARTICLES),
  getArticleById: (id) =>
    apiClient.get(endpoints.GET_ARTICLE_BY_ID.replace("{id}", id)),
  postArticle: (data) => apiClient.post(endpoints.POST_ARTICLE, data),
  updateArticle: (id, data) =>
    apiClient.put(endpoints.PUT_ARTICLE.replace("{id}", id), data),
  partiallyUpdateArticle: (id, data) =>
    apiClient.patch(endpoints.PATCH_ARTICLE.replace("{id}", id), data),
  deleteArticle: (id) =>
    apiClient.delete(endpoints.DELETE_ARTICLE.replace("{id}", id)),
};

export { apiService, endpoints };
