// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, walletTransactionApi } from "../utils/Constants";

export const walletTransaction = createAsyncThunk(" walletTransaction", async () => {
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
            walletTransactionApi
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const walletTransactionSlice = createSlice({
    name: "walletTransactionsReducer",

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
            .addCase(walletTransaction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(walletTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(walletTransaction.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearData } = walletTransactionSlice.actions;
export default walletTransactionSlice.reducer;
