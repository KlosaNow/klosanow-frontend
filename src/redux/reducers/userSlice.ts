import { createSlice } from "@reduxjs/toolkit";
import { userInterface } from "../../types/auth/authInterface";

const initialState: userInterface = {
  token: "",
  isAuth: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
