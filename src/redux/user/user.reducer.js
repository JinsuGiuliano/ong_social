import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  allUsers:[],
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      console.log('fetch users',payload)
       return{
         ...state,
         allUsers: payload
       }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
