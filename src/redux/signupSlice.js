// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, signupApi } from "../utils/Constants";

export const signupUser = createAsyncThunk("signupUser", async (payload) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(ApiBaseUrl + signupApi, payload, config, {
      withCredentials: true,
    });
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
  reducers: {
    clearSignUpData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
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

export const { clearSignUpData } = signupSlice.actions;

export default signupSlice.reducer;
