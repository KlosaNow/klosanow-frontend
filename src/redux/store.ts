import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
