// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, profileApi } from "../utils/Constants";

export const profile = createAsyncThunk("profile", async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    const url = ApiBaseUrl + profileApi;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const profileSlice = createSlice({
  name: "profileReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearProfileData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(profile.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearProfileData } = profileSlice.actions;
export default profileSlice.reducer;
