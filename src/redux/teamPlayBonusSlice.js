// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, teamPlayBonusApi } from "../utils/Constants";

export const teamPlayBonus = createAsyncThunk("teamPlayBonus", async () => {
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
            teamPlayBonusApi
            ;
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const teamPlayBonusSlice = createSlice({
    name: "teamPlayBonusReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearTeamPlayBonusData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(teamPlayBonus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(teamPlayBonus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(teamPlayBonus.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearTeamPlayBonusData } = teamPlayBonusSlice.actions;
export default teamPlayBonusSlice.reducer;
