// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, notificationApi } from "../utils/Constants";

export const getNotificationApi = createAsyncThunk("getNotificationApi", async (payload) => {
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
            notificationApi + `?skip=${payload}&limit=10`
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const notificationSlice = createSlice({
    name: "notificationReducer",

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
            .addCase(getNotificationApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNotificationApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getNotificationApi.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearData } = notificationSlice.actions;
export default notificationSlice.reducer;
