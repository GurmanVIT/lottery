// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ApiBaseUrl,
  withdrawRequestsApi,
  withdraw_requestsApi,
} from "../utils/Constants";

export const apiWithdrawRequest = createAsyncThunk(
  "apiWithdrawRequest",
  async () => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMzNzZkYzQ0NzY3YjZmYmVlMTM3ZDEiLCJlbWFpbCI6Imd1cm1hbkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJndXIiLCJsYXN0TmFtZSI6Im1hbiIsImlhdCI6MTcwODI3MzU3MSwiZXhwIjoxNzA4MzU5OTcxfQ.baP8jFAbmPSN4M3pWSBBw_V2RZszYAh3gt8vOQZEyIs",
        },
      };
      console.log("Config ===> ", config);
      console.log("Token ===>", config);
      const url = ApiBaseUrl + withdrawRequestsApi;
      const response = await axios.post(url, config);
      console.log("Response ===>", response.data);
      return response.data;
    } catch (error) {
      console.log("Error ===> ", error);
      throw error.response.data;
    }
  }
);

const withdrawRequestSlice = createSlice({
  name: "apiWithdrawRequestReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearDataWithdrawRequest: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiWithdrawRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiWithdrawRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(apiWithdrawRequest.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearDataWithdrawRequest } = withdrawRequestSlice.actions;
export default withdrawRequestSlice.reducer;
