import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
const selectUser = state => state.user;
  [selectUser],
  (user) => user.currentUser
)
