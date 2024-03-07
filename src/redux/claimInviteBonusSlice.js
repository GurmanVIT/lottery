// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, claimInviteBonusApi } from "../utils/Constants";

export const claimInviteBonus = createAsyncThunk("claimInviteBonus", async (payload) => {
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
            claimInviteBonusApi
            ;
        const response = await axios.post(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const claimInviteBonusSlice = createSlice({
    name: "claimInviteBonusReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearClaimInviteBonus: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(claimInviteBonus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(claimInviteBonus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(claimInviteBonus.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearClaimInviteBonus } = claimInviteBonusSlice.actions;
export default claimInviteBonusSlice.reducer;
