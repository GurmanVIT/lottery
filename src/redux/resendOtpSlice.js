// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, resendOtp } from "../utils/Constants";

export const resendOtpApi = createAsyncThunk(
  "resendOtpApi",
  async (payload) => {
    try {
      const response = await axios.put(ApiBaseUrl + resendOtp, payload);
      console.log("Resend OTP Response ===> ", response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const resendOtpSlice = createSlice({
  name: "resendOtpReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(resendOtpApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendOtpApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(resendOtpApi.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export default resendOtpSlice.reducer;
