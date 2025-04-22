import { createSlice } from "@reduxjs/toolkit";
import { ChatData, StudyChatListData } from "src/types";

const initialState: {
  chats: Array<ChatData>;
  studyChats: Array<StudyChatListData>;
} = {
  chats: [],
  studyChats: [],
};

const studyChatSlice = createSlice({
  name: "study-chat",
  initialState,
  reducers: {
    setStudyChats: (state, action) => {
      state.studyChats = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
  },
});

export const studyChatReducer = studyChatSlice.reducer;
export const { setChats, setStudyChats } = studyChatSlice.actions;
