import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./UserCard/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
