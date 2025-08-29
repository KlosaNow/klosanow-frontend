import { createSlice } from "@reduxjs/toolkit";
import { ChatData, StudyChatListData } from "src/types";
import { fetchChats, fetchStudyChats } from "./actions";

const initialState: {
  chats: {
    loading: boolean;
    data: Array<ChatData>;
  };
  studyChats: {
    loading: boolean;
    data: Array<StudyChatListData>;
  };
} = {
  chats: {
    loading: false,
    data: [],
  },
  studyChats: {
    loading: false,
    data: [],
  },
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
  extraReducers: (builder) =>
    builder
      .addCase(fetchChats.pending, (state) => {
        state.chats = {
          ...state.chats,
          loading: true,
        };
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.chats = {
          data: action.payload.data,
          loading: false,
        };
      })
      .addCase(fetchChats.rejected, (state) => {
        state.chats = {
          loading: false,
          data: [],
        };
      })
      .addCase(fetchStudyChats.pending, (state) => {
        state.studyChats = {
          ...state.studyChats,
          loading: true,
        };
      })
      .addCase(fetchStudyChats.fulfilled, (state, action) => {
        state.studyChats = {
          data: action.payload.data,
          loading: false,
        };
      })
      .addCase(fetchStudyChats.rejected, (state) => {
        state.studyChats = {
          loading: false,
          data: [],
        };
      }),
});

export const studyChatReducer = studyChatSlice.reducer;
