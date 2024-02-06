// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, deleteApi } from "../utils/Constants";

export const deleteNotifications = createAsyncThunk("deleteNotifications", async (payload) => {
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
            deleteApi
        const response = await axios.get(url, config);
        console.log("delete Response ===> ", response.data)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const deleteSlice = createSlice({
    name: "deleteReducer",

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
            .addCase(deleteNotifications.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteNotifications.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(deleteNotifications.rejected, (state, action) => {
                console.log("Error", action.payload);
                state.isError = false;
            });
    },
});

export const { clearData } = deleteSlice.actions;
export default deleteSlice.reducer;
