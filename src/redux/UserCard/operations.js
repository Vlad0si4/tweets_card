import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/Api/mockapi";

export const fetchUserThunk = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUsers();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
