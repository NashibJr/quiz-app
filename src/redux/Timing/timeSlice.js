import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seconds: 59,
  minutes: 4,
  timeAlert: "",
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    Timing: (state, action) => {
      state.seconds--;
      switch (state.seconds) {
        case 0:
          state.minutes--;
          state.seconds = 59;
          break;
        default:
          state.seconds = state.seconds;
          state.minutes = state.minutes;
          break;
      }
      if (state.minutes === 0) {
        state.minutes = 0;
        state.seconds = 0;
      }
      if (state.seconds < 10) {
        state.seconds = "0" + state.seconds;
      }
    },
  },
});

export const { Timing } = timeSlice.actions;

export default timeSlice;
