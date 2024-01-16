// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, otpApi } from "../utils/Constants";

export const otpVerify = createAsyncThunk("otpVerify", async (payload) => {
  console.log("Payload Slice ===>", payload);
  try {
    const response = await axios.put(ApiBaseUrl + otpApi, payload);
    console.log("OTP ===>", response.data);
    return response.data;
  } catch (error) {
    console.log("Error ===>", error.response.data);
    throw error.response.data;
  }
});

const otpSlice = createSlice({
  name: "otp",

  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(otpVerify.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otpVerify.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(otpVerify.rejected, (state, action) => {
        console.log("Error", action);
        state.isError = true;
      });
  },
});

export default otpSlice.reducer;
