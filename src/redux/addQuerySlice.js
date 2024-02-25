// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, submitFeedback } from "../utils/Constants";

export const addQuery = createAsyncThunk("addQuery", async (payload) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    const url = ApiBaseUrl + submitFeedback;
    const response = await axios.post(url, payload, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const addQuerySlice = createSlice({
  name: "addQueryReducer",

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
      .addCase(addQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(addQuery.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = addQuerySlice.actions;
export default addQuerySlice.reducer;
