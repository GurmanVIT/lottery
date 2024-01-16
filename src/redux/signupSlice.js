// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, signupApi } from "../utils/Constants";

export const signupUser = createAsyncThunk("signupUser", async (payload) => {
  try {
    const response = await axios.post(ApiBaseUrl + signupApi, payload);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const signupSlice = createSlice({
  name: "signup",

  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export default signupSlice.reducer;
