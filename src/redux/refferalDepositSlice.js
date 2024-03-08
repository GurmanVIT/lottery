// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, refferalDepositApi } from "../utils/Constants";

export const refferalDeposit = createAsyncThunk(" refferalDeposit", async () => {
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
            refferalDepositApi
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const refferalDepositSlice = createSlice({
    name: "refferalDepositReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearRefferalDepositData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(refferalDeposit.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(refferalDeposit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(refferalDeposit.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearRefferalDepositData } = refferalDepositSlice.actions;
export default refferalDepositSlice.reducer;
