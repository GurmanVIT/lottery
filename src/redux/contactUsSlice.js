// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, contactUsApi } from "../utils/Constants";

export const contactUs = createAsyncThunk("contactUs", async (payload) => {
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
            contactUsApi
            ;
        const response = await axios.post(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const contactUsSlice = createSlice({
    name: "contactUsReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearContactUsData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(contactUs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(contactUs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(contactUs.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearContactUsData } = contactUsSlice.actions;
export default contactUsSlice.reducer;
