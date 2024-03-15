// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, inviteBonusSheetApi } from "../utils/Constants";

export const inviteBonusSheet = createAsyncThunk("inviteBonusSheet", async (payload) => {
    try {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                authorization: token,
            },
        };
        const url = ApiBaseUrl +
            inviteBonusSheetApi;
        const response = await axios.post(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const inviteBonusSheetSlice = createSlice({
    name: "inviteBonusSheetReducer",

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
            .addCase(inviteBonusSheet.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(inviteBonusSheet.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(inviteBonusSheet.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearData } = inviteBonusSheetSlice.actions;
export default inviteBonusSheetSlice.reducer;
