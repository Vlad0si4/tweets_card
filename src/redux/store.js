import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./UserCard/userSlice";
import { filterReducer } from "./Filter/filterSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filterReducer,
  },
});
