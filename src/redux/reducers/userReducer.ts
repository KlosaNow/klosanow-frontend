import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserI } from "../../types/auth/authInterface";

const initialState: UserI = {
  token: "",
  isAuth: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateToken(state, action: PayloadAction<UserI>) {
      return { ...state, token: action.payload.token };
    },

    updateUserData(state, action: PayloadAction<UserI>) {
      return { ...state, data: action.payload.data };
    },
  },
});
export const { updateToken, updateUserData } = userSlice.actions;
export const { actions: userActions, reducer: userReducer } = userSlice;
