import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectAllUsers = createSelector(
  [selectUser],
  user => user.allUsers
);

export const selectFollowingUsers = createSelector(
  [selectUser],
  user => user.following
);

export const selectSavedPosts = createSelector(
  [selectUser],
  user => user.saved
);

export const selectSavedPostsLength = createSelector(
  [selectUser],
  user => user.saved.length
);

export const selectFormsState = createSelector(
  [selectUser],
  user => user.forms
);

export const selectProfilePageState = createSelector(
  [selectUser],
  user => user.profile
);

export const selectUserProfile = username =>
  createSelector(
    [selectAllUsers],
    (allUsers) => {
      console.log(username);
      return (allUsers ? allUsers.find(e => e.id === username): null)
    }
  );