// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, loginApi } from "../utils/Constants";

export const loginUser = createAsyncThunk("loginUser", async (payload) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(ApiBaseUrl + loginApi, payload, config);
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
  reducers: {
    clearData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = loginSlice.actions;
export default loginSlice.reducer;
