import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { lessonsReducer } from "../../api-endpoints/lessons";
import { contactsReducer } from "src/api-endpoints/contacts";

const rootReducer = combineReducers({
  user: userReducer,
  lessons: lessonsReducer,
  contacts: contactsReducer,
});

export default rootReducer;
