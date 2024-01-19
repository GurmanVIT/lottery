// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, checkSponsorIdApi } from "../utils/Constants";

export const checkSponsor = createAsyncThunk(
  "checkSponsor",
  async (payload) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    console.log("KKK")
    try {
      const response = await axios.get(
        ApiBaseUrl + checkSponsorIdApi + "?sponserId=" + payload,
        config
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const checkSponsorIdSlice = createSlice({
  name: "sponsorReducer",

  initialState: {
    isLoading: false,
    data: null,
  },

  reducers: {
    clearSponsorData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(checkSponsor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkSponsor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(checkSponsor.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export const { clearSponsorData } = checkSponsorIdSlice.actions;
export default checkSponsorIdSlice.reducer;
