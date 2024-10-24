import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { lessonsReducer } from "../../api-endpoints/lessons";

const rootReducer = combineReducers({
  user: userReducer,
  lessons: lessonsReducer,
});

export default rootReducer;
