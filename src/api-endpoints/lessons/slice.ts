import { createSlice } from "@reduxjs/toolkit";
import { fetchDrafts, fetchLessons } from "./actions";
import { LessonPayload } from "../../types";

const initialState: LessonPayload = {
  lessons: {
    data: {
      status: "",
      data: [],
      message: "",
    },
    loading: false,
  },
  drafts: {
    data: {
      status: "",
      data: [],
      message: "",
    },
    loading: false,
  },
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.drafts = {
          ...state.drafts,
          data: action.payload,
          loading: false,
        };
      })
      .addCase(fetchLessons.rejected, (state) => state)
      .addCase(fetchDrafts.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchDrafts.fulfilled, (state, action) => {
        state.drafts = {
          ...state.drafts,
          data: action.payload,
          loading: false,
        };
      });
  },
});

export const lessonsReducer = lessonsSlice.reducer;
