// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, randomMembersListApi } from "../utils/Constants";

export const randomMembersList = createAsyncThunk("randomMembersList", async () => {
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
            randomMembersListApi
            ;
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const randomMembersListSlice = createSlice({
    name: "randomMembersListReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearRandomMembersListData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(randomMembersList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(randomMembersList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(randomMembersList.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearRandomMembersListData } = randomMembersListSlice.actions;
export default randomMembersListSlice.reducer;
