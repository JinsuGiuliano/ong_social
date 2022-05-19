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
  [selectCurrentUser],
  currentUser => currentUser? currentUser.saved : null
);


export const selectSavedPostsIds = createSelector(
  [selectCurrentUser],
  currentUser => currentUser? currentUser.saved.map(s => s.id): null
);

export const selectSavedPostsLength = createSelector(
  [selectSavedPosts],
  saved => saved && saved.length
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

  export const selectIsFetching = createSelector(
    [selectUser],
    user => user.isFetching
  );

  export const selectUserPosts = createSelector(
    [selectUser],
    user => user.posts
  );