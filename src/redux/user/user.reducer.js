import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  allUsers:[],
  following:[],
  saved:[],
  notifications:[],
  forms:{
    signInForm: false,
    signUpForm: false
  },
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        forms:{
          signInForm: false,
          signUpForm: false
        },
        currentUser: payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        following:[],
        saved:[],
        notifications:[],
        currentUser: null
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
       return{
         ...state,
         allUsers: payload
       }
    case UserActionTypes.FETCH_FOLLOW_SUCCESS:
      return{
        ...state,
        following: payload
      }
  
    case UserActionTypes.FOLLOW_SUCCESS:
      return{
        ...state,
        following: [...state.following, payload]
      }
    case UserActionTypes.POST_SAVE_SUCCESS:
      return{
        ...state,
        saved: [...state.saved, payload]
      }
    case UserActionTypes.POST_UNSAVE_SUCCESS:
      return{
        ...state,
        saved: state.saved.filter(e => e !== payload)
      }
    case UserActionTypes.UNFOLLOW_SUCCESS:
        return{
          ...state,
          following: state.following.filter(e => e !== payload)
        }
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return{
        ...state,
        currentUser: payload
      }
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
        error: payload
      };
    default:
      return state;
  }
};
