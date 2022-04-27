import PostActionTypes from "./posts.types";

// Fetch Posts
export const postFetchStart = post => ({
    type: PostActionTypes.POST_FETCH_START,
    payload: post
  });
  
export const postFetchSuccess = post => ({
    type: PostActionTypes.POST_FETCH_SUCCESS,
    payload: post
});

export const postFetchFailure = error => ({
    type: PostActionTypes.POST_FETCH_FAILURE,
    payload: error
});

// Create Post
export const postCreateStart = post => ({
    type: PostActionTypes.POST_CREATE_START,
    payload: post
  });
  
export const postCreateSuccess = post => ({
    type: PostActionTypes.POST_CREATE_SUCCESS,
    payload: post
});

export const postCreateFailure = error => ({
    type: PostActionTypes.POST_CREATE_FAILURE,
    payload: error
});
  
// Update Post
export const postUpdateStart = post => ({
    type: PostActionTypes.POST_UPDATE_START,
    payload: post
  });
  
export const postUpdateSuccess = post => ({
    type: PostActionTypes.POST_UPDATE_SUCCESS,
    payload: post
});

export const postUpdateFailure = error => ({
    type: PostActionTypes.POST_UPDATE_FAILURE,
    payload: error
});
  
// Delete Post
export const postDeleteStart = post => ({
    type: PostActionTypes.POST_DELETE_START,
    payload: post
  });
  
export const postDeleteSuccess = post => ({
    type: PostActionTypes.POST_DELETE_SUCCESS,
    payload: post
});

export const postDeleteFailure = error => ({
    type: PostActionTypes.POST_DELETE_FAILURE,
    payload: error
});