import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seconds: 59,
  minutes: 1,
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    Timing: (state, action) => {
      state.seconds--;
      if (state.seconds === 0) {
        state.minutes--;
        state.seconds = 59;
      }
      if (state.minutes === 0) {
        state.minutes = 0;
        state.seconds--;
      }
      if (state.minutes < 0) {
        state.minutes = 0;
        state.seconds = 0;
      }
      if (state.seconds < 10) {
        state.seconds = "0" + state.seconds--;
      }
    },
    timeReseter: (state, action) => {
      state.seconds = 59;
      state.minutes = 1;
    },
  },
});

export const { Timing, timeReseter } = timeSlice.actions;

export default timeSlice;
