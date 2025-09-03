import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "./apis";

export const fetchContacts = createAsyncThunk("users/fetchUsers", async () => {
  const res = await getContacts();
  return res;
});
