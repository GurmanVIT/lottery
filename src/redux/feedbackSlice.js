// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, submitFeedback } from "../utils/Constants";

export const submitFeedbackApi = createAsyncThunk(
  "submitFeedbackApi",
  async (payload) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: token,
        },
      };
      const url = ApiBaseUrl + submitFeedback;
      const response = await axios.post(url, payload, config);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const submitFeedbackSlice = createSlice({
  name: "submitFeedbackReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFeedbackApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitFeedbackApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(submitFeedbackApi.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = submitFeedbackSlice.actions;
export default submitFeedbackSlice.reducer;
