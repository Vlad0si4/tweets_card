import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUserThunk } from "./operations";

const initialState = {
  users: [],
  isLoading: true,
  error: "",
};

const pending = (state) => {
  state.isLoading = true;
  state.error = "";
};
const rejected = (state) => {
  state.isLoading = false;
  state.error = true;
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchUserThunk.pending), pending)
      .addMatcher(isAnyOf(fetchUserThunk.rejected), rejected);
  },
});

export const usersReducer = userSlice.reducer;
