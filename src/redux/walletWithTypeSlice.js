// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, walletTransactionApi } from "../utils/Constants";

export const walletType = createAsyncThunk("walletType", async (payload) => {
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
            walletTransactionApi
            ;
        const response = await axios.get(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const walletWithTypeSlice = createSlice({
    name: "walletTypeReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearWalletType: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(walletType.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(walletType.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(walletType.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearWalletType } = walletWithTypeSlice.actions;
export default walletWithTypeSlice.reducer;
