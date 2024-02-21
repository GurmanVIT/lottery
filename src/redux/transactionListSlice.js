// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, walletTransactionApi } from "../utils/Constants";

export const transactionList = createAsyncThunk(
  "transactionList",
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
      const url = ApiBaseUrl + walletTransactionApi;
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const transactionListSlice = createSlice({
  name: "transactionListReducer",

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
      .addCase(transactionList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(transactionList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(transactionList.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = transactionListSlice.actions;
export default transactionListSlice.reducer;
