import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  allUsers:[],
  following:[],
  saved:[],
  notifications:[],
  posts:[],
  forms:{
    signInForm: false,
    signUpForm: false
  },
  profile:{},
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.FETCH_FOLLOW_START:
    case UserActionTypes.FETCH_USERS_START:
    case UserActionTypes.FETCH_USER_PROFILE_START:
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.UPDATE_USER_START:
      return {
        ...state,
        isFetching: true
      }

    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        forms:{
          signInForm: false,
          signUpForm: false
        },
        currentUser:{ ...state.currentUser, ...payload},
        isFetching: false
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        following:[],
        saved:[],
        notifications:[],
        currentUser: null,
        isFetching: false
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
       return{
         ...state,
         allUsers: payload,
         isFetching: false
       }
    case UserActionTypes.FETCH_USER_PROFILE_SUCCESS:
      return{
        ...state,
        profile: payload,
        isFetching: false
      }
    case UserActionTypes.FOLLOW_SUCCESS:
      return{
        ...state,
        following: [...state.following, payload]
      }
    case UserActionTypes.POST_SAVE_SUCCESS:
      return{
        ...state,
        currentUser:{ ...state.currentUser, saved: [...state.currentUser.saved, {...payload, retweetCount: payload.retweetCount + 1}]},
        isFetching: false
      }
    case UserActionTypes.POST_UNSAVE_SUCCESS:
      return{
        ...state,
        currentUser:{ ...state.currentUser, saved: state.currentUser.saved.filter(e => e.id !== payload.id)},
        isFetching: false
      }
    case UserActionTypes.UNFOLLOW_SUCCESS:
        return{
          ...state,
          following: state.following.filter(e => e !== payload)
        }
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return{
        ...state,
        currentUser: payload,
        isFetching: false
      }
    case UserActionTypes.FETCH_USER_POSTS_SUCCESS:
      return{
        ...state,
        isFetching: false,
        posts: payload
      }
    case UserActionTypes.POST_CREATE_SUCCESS:
      return{
        ...state,
        posts: [...state.posts, payload ]
      }
    case UserActionTypes.FETCH_USER_POSTS_FAILURE:
    case UserActionTypes.FETCH_USER_PROFILE_FAILURE:
    case UserActionTypes.UPDATE_USER_FAILURE:
    case UserActionTypes.POST_SAVE_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.FOLLOW_FAILURE:
    case UserActionTypes.UNFOLLOW_FAILURE:
    case UserActionTypes.FETCH_FOLLOW_FAILURE:
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: payload,
        isFetching: false
      };
    default:
      return state;
  }
};
