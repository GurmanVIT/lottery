// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, changePasswordApi } from "../utils/Constants";

export const changePassword = createAsyncThunk("changePassword", async (payload) => {
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
            changePasswordApi
        const response = await axios.put(url, payload, config);
        console.log("change{assword} Response ===> ", response.data)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const changePasswordSlice = createSlice({
    name: "changePasswordReducer",

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
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(changePassword.rejected, (state, action) => {
                console.log("Error", action.payload);
                state.isError = false;
            });
    },
});

export const { clearData } = changePasswordSlice.actions;
export default changePasswordSlice.reducer;
