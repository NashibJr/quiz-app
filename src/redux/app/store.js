import { configureStore } from "@reduxjs/toolkit";
import { marksSlice } from "../marks/marksSlice";

export const store = configureStore({
  reducer: {
    marks: marksSlice.reducer,
  },
});
