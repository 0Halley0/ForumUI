import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../services/apiService";

export const postClap = createAsyncThunk(
  "userInteraction/postClap",
  async (articleId, { rejectWithValue }) => {
    try {
      const response = await apiService.postClap(articleId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTopPicks = createAsyncThunk(
  "userInteraction/getTopPicks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.getTopPicks();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getComments = createAsyncThunk(
  "userInteraction/getComments",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await apiService.getComments(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postComment = createAsyncThunk(
  "userInteraction/postComment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiService.postComment(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  clapResponse: null,
  topPicks: [],
  comments: [],
  commentResponse: null,
  loading: false,
  error: null,
};

const userInteractionSlice = createSlice({
  name: "userInteraction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postClap.pending, (state) => {
        state.loading = true;
      })
      .addCase(postClap.fulfilled, (state, action) => {
        state.loading = false;
        state.clapResponse = action.payload;
      })
      .addCase(postClap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTopPicks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopPicks.fulfilled, (state, action) => {
        state.loading = false;
        state.topPicks = action.payload;
      })
      .addCase(getTopPicks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.loading = false;
        state.commentResponse = action.payload;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userInteractionSlice.reducer;
