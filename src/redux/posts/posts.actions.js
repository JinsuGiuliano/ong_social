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

// Fetch Posts
export const postFetchNewestStart = last => ({
    type: PostActionTypes.FETCH_NEWEST_POSTS_START,
    payload: last
  });
  
export const postFetchNewestSuccess = newest => ({
    type: PostActionTypes.FETCH_NEWEST_POSTS_SUCCESS,
    payload: newest
});

export const postFetchNewestFailure = error => ({
    type: PostActionTypes.FETCH_NEWEST_POSTS_FAILURE,
    payload: error
});

// Create Post
export const postCreateStart = (post, user) => ({
    type: PostActionTypes.POST_CREATE_START,
    payload: { post, user }
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

// like Post
export const postLikeStart = (postId,uid) => ({
    type: PostActionTypes.POST_LIKE_START,
    payload: { postId, uid }
  });
  
export const postLikeSuccess = postId => ({
    type: PostActionTypes.POST_LIKE_SUCCESS,
    payload: postId
});

export const postLikeFailure = error => ({
    type: PostActionTypes.POST_LIKE_FAILURE,
    payload: error
});

// retweet Post
export const postRetweetStart = (postId,uid) => ({
    type: PostActionTypes.POST_RETWEET_START,
    payload: { postId, uid }
  });
  
export const postRetweetSuccess = postId => ({
    type: PostActionTypes.POST_RETWEET_SUCCESS,
    payload: postId
});

export const postRetweetFailure = error => ({
    type: PostActionTypes.POST_RETWEET_FAILURE,
    payload: error
});

// dislike Post
export const postDisLikeStart = post => ({
    type: PostActionTypes.POST_DISLIKE_START,
    payload: post
  });
  
export const postDisLikeSuccess = post => ({
    type: PostActionTypes.POST_DISLIKE_SUCCESS,
    payload: post
});

export const postDisLikeFailure = error => ({
    type: PostActionTypes.POST_DISLIKE_FAILURE,
    payload: error
});


export const resetMessage = post => ({
    type: PostActionTypes.RESET_MESSAGE,
    payload: post
});