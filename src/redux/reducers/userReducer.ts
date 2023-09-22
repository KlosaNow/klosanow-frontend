import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userInterface } from "../../types/auth/authInterface";

const initialState: userInterface = {
  token: "",
  isAuth: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateToken(state, action: PayloadAction<userInterface>) {
      return { ...state, token: action.payload.token, isAuth: true };
    },

    updateUserData(state, action: PayloadAction<userInterface>) {
      return { ...state, data: action.payload.data };
    },
    removeUser() {
      return { ...initialState };
    },
  },
});
export const { updateToken, updateUserData, removeUser } = userSlice.actions;
export const { actions: userActions, reducer: userReducer } = userSlice;
