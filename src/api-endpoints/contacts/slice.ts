import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./actions";
import { ContactPayload } from "./interface";

const initialState: ContactPayload = {
  contacts: {
    data: [],
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => state)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => state);
  },
});

export const contactsReducer = contactsSlice.reducer;
