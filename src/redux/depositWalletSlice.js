// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, depositWalletApi } from "../utils/Constants";

export const depositWallet = createAsyncThunk("depositWallet", async () => {
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
            depositWalletApi
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const depositWalletSlice = createSlice({
    name: "depositWalletReducer",

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
            .addCase(depositWallet.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(depositWallet.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(depositWallet.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearData } = depositWalletSlice.actions;
export default depositWalletSlice.reducer;
