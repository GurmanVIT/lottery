// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("loginUser", async (credentials) => {
  try {
    const response = await axios.post(ApiBaseUrl + loginApi, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const loginSlice = createSlice({
  name: "login",

  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        console.log(state.data);
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export default loginSlice.reducer;
