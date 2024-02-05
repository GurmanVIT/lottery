// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, updateProfile } from "../utils/Constants";

export const updateProfileApi = createAsyncThunk("updateProfileApi", async (payload) => {
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
            updateProfile
        const response = await axios.put(url, payload, config);
        console.log("change{assword} Response ===> ", response.data)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const changeNickNameSlice = createSlice({
    name: "changeNickNameReducer",

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
            .addCase(updateProfileApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfileApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(updateProfileApi.rejected, (state, action) => {
                console.log("Error", action.payload);
                state.isError = false;
            });
    },
});

export const { clearData } = changeNickNameSlice.actions;
export default changeNickNameSlice.reducer;
