import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  correctAnswers: ["JavaScript", "filter()", "1993", "html", "map()"],
  attemptedAnswers: [],
  marks: 0,
};

export const marksSlice = createSlice({
  name: "marks",
  initialState,
  reducers: {
    getAnswers: (state, action) => {
      const answers = state.attemptedAnswers.concat(action.payload);
      state.attemptedAnswers = answers;
      for (let index = 0; index < state.correctAnswers.length; index++) {
        if (state.correctAnswers[index] === action.payload) {
          state.marks += 1;
        } else {
          state.marks += 0;
        }
      }
    },
    clearStore: (state, action) => {
      state.attemptedAnswers = [];
      state.marks = 0;
    },
  },
});

export const { getAnswers, clearStore } = marksSlice.actions;
