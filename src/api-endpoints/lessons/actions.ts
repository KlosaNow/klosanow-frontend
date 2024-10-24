import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDrafts, getLessons } from ".";

export const fetchLessons = createAsyncThunk(
  "lessons/fetchLessons",
  async () => {
    const res = await getLessons();
    return res;
  }
);

export const fetchDrafts = createAsyncThunk("lessons/fetchDrafts", async () => {
  const res = await getDrafts();
  return res;
});
