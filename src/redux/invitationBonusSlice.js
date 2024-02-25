// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ApiBaseUrl,
  gameHistoryApi,
  inviteBonusSheet,
} from "../utils/Constants";

export const getInvitationBonus = createAsyncThunk(
  "getInvitationBonus",
  async (payload) => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      const url = ApiBaseUrl + inviteBonusSheet;
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const getInvitationBonusSlice = createSlice({
  name: "getInvitationBonusReducer",

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
      .addCase(getInvitationBonus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInvitationBonus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getInvitationBonus.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = getInvitationBonusSlice.actions;
export default getInvitationBonusSlice.reducer;
