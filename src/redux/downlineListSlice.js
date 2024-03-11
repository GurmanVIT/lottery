// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, downlineListApi } from "../utils/Constants";

export const downlineList = createAsyncThunk("downlineList", async (payload) => {
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
            downlineListApi
            ;
        const response = await axios.post(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const downlineListSlice = createSlice({
    name: "downlineListReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearDownlineListData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(downlineList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(downlineList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(downlineList.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearDownlineListData } = downlineListSlice.actions;
export default downlineListSlice.reducer;
