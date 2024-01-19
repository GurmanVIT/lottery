import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, forgotPasswordApi } from "../utils/Constants";

export const forgotUser = createAsyncThunk("forgotUser", async (payload) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.put(
      ApiBaseUrl + forgotPasswordApi,
      payload,
      config,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const forgotSlice = createSlice({
  name: "forgotReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(forgotUser.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export default forgotSlice.reducer;
