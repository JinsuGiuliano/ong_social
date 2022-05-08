import { createSelector } from 'reselect';

const selectSearch = (state) => state.search;

export const selectTheSearch = createSelector(
  [selectSearch],
  search =>  search.search
);
