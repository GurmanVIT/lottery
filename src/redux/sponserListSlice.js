// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, sponserListApi, } from "../utils/Constants";

export const sponserList = createAsyncThunk("sponserList", async () => {
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
            sponserListApi
            ;
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const sponserListSlice = createSlice({
    name: "sponserListReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearSponserListData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sponserList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sponserList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(sponserList.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearSponserListData } = sponserListSlice.actions;
export default sponserListSlice.reducer;
