// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, gameHistoryApi, myHistoryApi } from "../utils/Constants";

export const myHistory = createAsyncThunk("myHistory", async (payload) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    const url =
      ApiBaseUrl +
      myHistoryApi +
      `?skip=${payload.skip}&limit=${payload.limit}&type=${payload.type}`;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const myHistorySlice = createSlice({
  name: "myHistoryReducer",

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
      .addCase(myHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(myHistory.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = myHistorySlice.actions;
export default myHistorySlice.reducer;
