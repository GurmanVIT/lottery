// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, directMembersListApi } from "../utils/Constants";

export const directMemberList = createAsyncThunk(
  "directMemberList",
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
      const url = ApiBaseUrl + directMembersListApi;
      const response = await axios.post(url, payload, config);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const directMemberListSlice = createSlice({
  name: "directMemberListReducer",

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
      .addCase(directMemberList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(directMemberList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(directMemberList.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const { clearData } = directMemberListSlice.actions;
export default directMemberListSlice.reducer;
