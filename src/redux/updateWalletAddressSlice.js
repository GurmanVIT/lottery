// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, updateWalletAddressApi } from "../utils/Constants";

export const updateWalletAddress = createAsyncThunk(
  "updateWalletAddress",
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
      const url = ApiBaseUrl + updateWalletAddressApi;
      const response = await axios.post(url, payload, config);

      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const updateWalletAddressSlice = createSlice({
  name: "updateWalletAddressReducer",

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
      .addCase(updateWalletAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateWalletAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateWalletAddress.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearDataWalletUpdate } = updateWalletAddressSlice.actions;
export default updateWalletAddressSlice.reducer;
