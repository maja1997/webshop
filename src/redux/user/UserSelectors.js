import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

// eslint-disable-next-line import/prefer-default-export
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);
