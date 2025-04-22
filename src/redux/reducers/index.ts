import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { lessonsReducer } from "src/api-endpoints/lessons";
import { contactsReducer } from "src/api-endpoints/contacts";
import { studyChatReducer } from "src/api-endpoints/studyChat";

const rootReducer = combineReducers({
  user: userReducer,
  lessons: lessonsReducer,
  contacts: contactsReducer,
  studyChat: studyChatReducer,
});

export default rootReducer;
