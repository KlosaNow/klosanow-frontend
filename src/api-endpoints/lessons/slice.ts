import { createSlice } from "@reduxjs/toolkit";
import { fetchDrafts, fetchLessons } from "./actions";
import { LessonPayload } from "../../types";

const initialState: LessonPayload = {
  lessons: {
    data: [],
  },
  drafts: {
    data: [],
  },
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (state) => state)
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
      })
      .addCase(fetchLessons.rejected, (state) => state)
      .addCase(fetchDrafts.pending, (state) => ({
        ...state,
      }))
      .addCase(fetchDrafts.fulfilled, (state, action) => {
        state.drafts = action.payload;
      })
      .addCase(fetchDrafts.rejected, (state) => state);
  },
});

export const lessonsReducer = lessonsSlice.reducer;
