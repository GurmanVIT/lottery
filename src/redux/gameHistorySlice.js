// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, gameHistoryApi } from "../utils/Constants";

export const gameHistory = createAsyncThunk("gameHistory", async (payload) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const url =
      ApiBaseUrl +
      gameHistoryApi +
      `?skip=${payload.skip}&limit=${payload.limit}&type=${payload.type}`;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const gameHistorySlice = createSlice({
  name: "gameHistoryReducer",

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
      .addCase(gameHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(gameHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(gameHistory.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = gameHistorySlice.actions;
export default gameHistorySlice.reducer;
