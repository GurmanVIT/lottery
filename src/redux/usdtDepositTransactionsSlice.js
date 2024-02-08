// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, usdtDepositTransactionsApi } from "../utils/Constants";

export const usdtDepositTransactions = createAsyncThunk("usdtDepositTransactions", async () => {
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
            usdtDepositTransactionsApi
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const usdtDepositTransactionsSlice = createSlice({
    name: "usdtDepositTransactionsReducer",

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
            .addCase(usdtDepositTransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(usdtDepositTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(usdtDepositTransactions.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearData } = usdtDepositTransactionsSlice.actions;
export default usdtDepositTransactionsSlice.reducer;
