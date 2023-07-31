import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, updateUsersFollower } from "../../services/Api/mockapi";

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

export const fetchUpdateThunkFollowed = createAsyncThunk(
  "user/updateFollower",
  async ({ id, updateState, followingUsers }, { rejectWithValue }) => {
    console.log(updateState);
    try {
      const data = await updateUsersFollower(id, updateState, followingUsers);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
