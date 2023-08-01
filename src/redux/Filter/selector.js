import { createSelector } from "reselect";
import { selectUsers } from "../UserCard/selector";

export const selectFilter = (state) => state.filters.filter;

export const selectFilteredData = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    switch (filter) {
      case "FOLLOWING":
        return users.filter((user) => user.isFollowed);
      case "FOLLOW":
        return users.filter((user) => !user.isFollowed);
      default:
        return users;
    }
  }
);
