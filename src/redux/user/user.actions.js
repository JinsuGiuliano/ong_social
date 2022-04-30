import UserActionTypes from './user.types';      

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});


export const fetchUsersStart = () => ({
  type: UserActionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = users => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = error => ({
  type: UserActionTypes.FETCH_USERS_FAILURE,
  payload: error
});


export const followStart = userId => ({
  type: UserActionTypes.FOLLOW_START,
  payload: userId
});

export const followSuccess = userId => ({
  type: UserActionTypes.FOLLOW_SUCCESS,
  payload: userId
});

export const followFailure = error => ({
  type: UserActionTypes.FOLLOW_FAILURE,
  payload: error
});


export const unfollowStart = userId => ({
  type: UserActionTypes.UNFOLLOW_START,
  payload: userId
});

export const unfollowSuccess = userId => ({
  type: UserActionTypes.UNFOLLOW_SUCCESS,
  payload: userId
});

export const unfollowFailure = error => ({
  type: UserActionTypes.UNFOLLOW_FAILURE,
  payload: error
});



export const fetchFollowStart = () => ({
  type: UserActionTypes.FETCH_FOLLOW_START
});

export const fetchFollowSuccess = following => ({
  type: UserActionTypes.FETCH_FOLLOW_SUCCESS,
  payload: following
});

export const fetchFollowFailure = error => ({
  type: UserActionTypes.FETCH_FOLLOW_FAILURE,
  payload: error
});

// Save Post
export const postSaveStart = postId => ({
  type: UserActionTypes.POST_SAVE_START,
  payload: postId
});

export const postSaveSuccess = postId => ({
  type: UserActionTypes.POST_SAVE_SUCCESS,
  payload: postId
});

export const postSaveFailure = error => ({
  type: UserActionTypes.POST_SAVE_FAILURE,
  payload: error
});

// Unsave Post
export const postUnSaveStart = postId => ({
  type: UserActionTypes.POST_UNSAVE_START,
  payload: postId
});

export const postUnSaveSuccess = postId => ({
  type: UserActionTypes.POST_UNSAVE_SUCCESS,
  payload: postId
});

export const postUnSaveFailure = error => ({
  type: UserActionTypes.POST_UNSAVE_FAILURE,
  payload: error
});