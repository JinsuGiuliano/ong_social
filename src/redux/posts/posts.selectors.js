import { createSelector } from 'reselect';

const selectPosts = (state) => state.posts;

export const selectAllPosts = createSelector(
  [selectPosts],
  posts =>  posts.posts.length > 0 && [...posts.posts]
);

export const selectUserProfilePosts = username =>
  createSelector(
    [selectAllPosts],
    (posts) => {
      console.log(username);
      return (posts ? posts.find(e => e.uid === username): null)
    }
  );

  export const selectIsFetching = createSelector(
    [selectPosts],
    posts =>  posts.isFetching
  );

  export const selectIsFetchingNewest = createSelector(
    [selectPosts],
    posts =>  posts.isFetchingNewest
  );

  export const selectInfoMessage = createSelector(
    [selectPosts],
    posts =>  posts.infoMessage
  );