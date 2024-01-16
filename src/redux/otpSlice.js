// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, otpApi } from "../utils/Constants";

export const otpAuth = createAsyncThunk("otpAuth", async (payload) => {
  try {
    console.log("OTP Payload ===> ", payload);
    const response = await axios.put(ApiBaseUrl + otpApi, payload);
    console.log("OTP Response ===> ", response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const otpSlice = createSlice({
  name: "otpReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(otpAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otpAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(otpAuth.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export default otpSlice.reducer;
