import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },

    setDestination: () => {
      state.destination = action.payload;
    },

    setTravelTimeInformation: () => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestinaton = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.travelTimeInformation;

export default navSlice.reducer;
