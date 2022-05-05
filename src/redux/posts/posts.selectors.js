import { createSelector } from 'reselect';

const selectPosts = (state) => state.posts;

export const selectAllPosts = createSelector(
  [selectPosts],
  posts =>  posts.posts
);

export const selectUserProfilePosts = username =>
  createSelector(
    [selectAllPosts],
    (posts) => {
      console.log(username);
      return (posts ? posts.find(e => e.uid === username): null)
    }
  );