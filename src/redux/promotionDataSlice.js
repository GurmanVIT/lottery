// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, promotionDataApi } from "../utils/Constants";

export const promotionData = createAsyncThunk("promotionData", async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    const url = ApiBaseUrl + promotionDataApi;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const promotionDataSlice = createSlice({
  name: "promotionDataReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(promotionData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(promotionData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(promotionData.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = promotionDataSlice.actions;
export default promotionDataSlice.reducer;
