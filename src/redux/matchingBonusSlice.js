// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, matchingBonusApi } from "../utils/Constants";

export const matchingBonus = createAsyncThunk("matchingBonus", async () => {
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
            matchingBonusApi;
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const matchingBonusSlice = createSlice({
    name: "matchingBonusReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearMatchingBonusData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(matchingBonus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(matchingBonus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(matchingBonus.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearMatchingBonusData } = matchingBonusSlice.actions;
export default matchingBonusSlice.reducer;
