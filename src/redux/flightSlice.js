import axios from "axios";
import { options } from "./constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    flights: [],
    flightsLoading: true,
    isError: false
}



export const getFlightData = createAsyncThunk("flights/getflights", async () => {
    const res = await axios.request(options);
    const flightRes = res.data.aircraft.map((plane) => ({
        id: plane[0],
        code: plane[1],
        lat: plane[2],
        lng: plane[3],
    }))

    return flightRes

});

export const flightSlice = createSlice({
    name: "flightSlice",
    initialState,
    extraReducers: {
        [getFlightData.pending]: (state, action) => {
            state.flightsLoading = true
            console.log("flightsLoading", flightsLoading);
        },
        [getFlightData.fulfilled]: (state, action) => {
            state.flights = action.payload;
            state.flightsLoading = false
        },
        [getFlightData.rejected]: (state, action) => {
            state.isError = true;
            state.flightsLoading = false;
            console.log("data fetch error", state.isError);
        },

    }
})