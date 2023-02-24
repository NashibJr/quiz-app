import { configureStore } from "@reduxjs/toolkit";
import { marksSlice } from "../marks/marksSlice";
import timeSlice from "../Timing/timeSlice";

export const store = configureStore({
  reducer: {
    marks: marksSlice.reducer,
    time: timeSlice.reducer,
  },
});
