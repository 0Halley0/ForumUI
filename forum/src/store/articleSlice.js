import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../services/apiService";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.getArticles();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch article by ID
export const fetchArticleById = createAsyncThunk(
  "articles/fetchArticleById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiService.getArticleById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create article
export const createArticle = createAsyncThunk(
  "articles/createArticle",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiService.postArticle(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update article
export const updateArticle = createAsyncThunk(
  "articles/updateArticle",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await apiService.updateArticle(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Partially update article
export const partiallyUpdateArticle = createAsyncThunk(
  "articles/partiallyUpdateArticle",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await apiService.partiallyUpdateArticle(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete article
export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async (id, { rejectWithValue }) => {
    try {
      await apiService.deleteArticle(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  articles: [],
  currentArticle: null,
  status: "idle",
  error: null,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    resetCurrentArticle(state) {
      state.currentArticle = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentArticle = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles.push(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.articles.findIndex(
          (article) => article.id === action.payload.id
        );
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(partiallyUpdateArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(partiallyUpdateArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.articles.findIndex(
          (article) => article.id === action.payload.id
        );
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
      })
      .addCase(partiallyUpdateArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = state.articles.filter(
          (article) => article.id !== action.payload
        );
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetCurrentArticle } = articleSlice.actions;
export default articleSlice.reducer;
