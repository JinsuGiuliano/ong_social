import SearchActionTypes from "./searchBar.types";

// Fetch Posts
export const postFetchStart = search => ({
    type: SearchActionTypes.SEARCH_FETCH_START,
    payload: search
  });
  
export const postFetchSuccess = search => ({
    type: SearchActionTypes.SEARCH_FETCH_SUCCESS,
    payload: search
});

export const postFetchFailure = error => ({
    type: SearchActionTypes.SEARCH_FETCH_FAILURE,
    payload: error
});