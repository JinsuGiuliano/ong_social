import { createSelector } from 'reselect';

const selectPosts = (state) => state.posts;

export const selectAllPosts = createSelector(
  [selectPosts],
  posts =>  posts.posts
);

