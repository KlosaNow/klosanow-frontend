import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChats, getStudyChats } from "./apis";
import { ChatResponse, StudyChatResponse } from "src/types";

export const fetchChats = createAsyncThunk<ChatResponse>("chats", async () => {
  const res = await getChats();
  return res;
});

export const fetchStudyChats = createAsyncThunk<StudyChatResponse>(
  "study-chats",
  async () => {
    const res = await getStudyChats();
    return res;
  }
);
