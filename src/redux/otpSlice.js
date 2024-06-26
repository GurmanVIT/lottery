// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, otpApi } from "../utils/Constants";

export const otpAuth = createAsyncThunk("otpAuth", async (payload) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.put(ApiBaseUrl + otpApi, payload, config);
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
  reducers: {
    clearOtpData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
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
        state.isError = false;
      });
  },
});

export const { clearOtpData } = otpSlice.actions;

export default otpSlice.reducer;
