import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "./constants";

export const getFlightData = createAsyncThunk("flights/fetchFlightData", async () => {
    try {
        const res = await axios.request(options);
        const flightRes = res.data.aircraft.map((plane) => ({
            id: plane[0],
            code: plane[1],
            lat: plane[2],
            lng: plane[3],
        }));
        return flightRes;
    } catch (error) {
        throw error; // Make sure to re-throw the error for proper handling in asyncThunk
    }
});

const initialState = {
    flights: [],
    flightsLoading: true,
    isError: false
};

export const flightSlice = createSlice({
    name: "flightSlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getFlightData.pending, (state) => {
                state.flightsLoading = true;
                console.log("flightsLoading", state.flightsLoading);
            })

            .addCase(getFlightData.fulfilled, (state, action) => {
                state.flights = action.payload;
                console.log("action.payload", action.payload);
                state.flightsLoading = false;
                console.log("data fetch ok", state.flights);
            })

            .addCase(getFlightData.rejected, (state) => {
                state.isError = true;
                state.flightsLoading = false;
                console.log("data fetch error", state.isError);
            });
    },
});

export default flightSlice.reducer;
