import axios from "axios";
import { options } from "./constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    flights: [],
    flightsLoading: true,
    isError: false
}



export const getFlightData = createAsyncThunk("flights/getflights", async () => {
    const flightRes = await axios.request(options);
    console.log(flightRes);

});

export const flightSlice = createSlice({
    name: "flightSlice",
    initialState,
    extraReducers: {

    }
})