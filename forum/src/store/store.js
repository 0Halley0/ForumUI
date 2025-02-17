import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import articleReducer from "./articleSlice";
import userInteractionReducer from "./userInteractionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles: articleReducer,
    userInteraction: userInteractionReducer,
  },
});

export default store;
