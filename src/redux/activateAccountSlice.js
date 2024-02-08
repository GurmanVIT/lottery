// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, activateAccountApi } from "../utils/Constants";

export const activateAccount = createAsyncThunk("activateAccount", async (payload) => {
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
            activateAccountApi
        const response = await axios.get(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const activateAccountSlice = createSlice({
    name: "activateAccountReducer",

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
            .addCase(activateAccount.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(activateAccount.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(activateAccount.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearData } = activateAccountSlice.actions;
export default activateAccountSlice.reducer;
