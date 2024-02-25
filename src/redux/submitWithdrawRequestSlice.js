// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, submitWithdrawRequestApi } from "../utils/Constants";

export const submitWithdrawRequest = createAsyncThunk(
  "submitWithdrawRequest",
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
      const url = ApiBaseUrl + submitWithdrawRequestApi;
      const response = await axios.post(url, payload, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const submitWithdrawRequestSlice = createSlice({
  name: "submitWithdrawRequestReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearDataWalletUpdate: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitWithdrawRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitWithdrawRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(submitWithdrawRequest.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearDataWalletUpdate } = submitWithdrawRequestSlice.actions;
export default submitWithdrawRequestSlice.reducer;
