import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
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
  GET_INFO: "/api/users/info/",
  PUT_INFO: "/api/users/info/",
  PATCH_INFO: "/api/users/info/",
  GET_ARTICLES: "/api/article/articles/",
  GET_ARTICLE_BY_ID: "/api/article/articles/{id}/",
  POST_ARTICLE: "/api/article/articles/",
  PUT_ARTICLE: "/api/article/articles/{id}/",
  PATCH_ARTICLE: "/api/article/articles/{id}/",
  DELETE_ARTICLE: "/api/article/articles/{id}/",
  GET_CATEGORIES: "/api/category/all/",
  POST_CLAP: "/api/article/clap/{article_id}/",
  GET_TOP_PICKS: "/api/article/top-picks/",
  GET_COMMENTS: "/api/comments/get/{slug}/",
  POST_COMMENT: "/api/comments/create/",
};

const apiService = {
  signUp: (data) => apiClient.post(endpoints.SIGN_UP, data),
  signIn: (data) => apiClient.post(endpoints.SIGN_IN, data),
  refreshToken: () => apiClient.post(endpoints.REFRESH_TOKEN),
  logout: () => apiClient.post(endpoints.LOGOUT),
  verifyEmail: (token) => apiClient.post(endpoints.VERIFY_EMAIL, { token }),
  loginVerify: (token) => apiClient.post(endpoints.LOGIN_VERIFY, { token }),
  getUserInfo: () => apiClient.get(endpoints.GET_INFO),
  updateUserInfo: (data) => apiClient.put(endpoints.PUT_INFO, data),
  partiallyUpdateUserInfo: (data) =>
    apiClient.patch(endpoints.PATCH_INFO, data),
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
  getCategories: () => apiClient.get(endpoints.GET_CATEGORIES),
  postClap: (articleId) =>
    apiClient.post(endpoints.POST_CLAP.replace("{article_id}", articleId)),
  getTopPicks: () => apiClient.get(endpoints.GET_TOP_PICKS),
  getComments: (slug) =>
    apiClient.get(endpoints.GET_COMMENTS.replace("{slug}", slug)),
  postComment: (data) => apiClient.post(endpoints.POST_COMMENT, data),
};

export { apiService, endpoints };
