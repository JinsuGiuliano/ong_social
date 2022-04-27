import PostActionTypes from './posts.types'

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  errorMessage: undefined
};

// const UpdateItem = (keyValue, newKey, newValue) =>
// {
//   keyValue.Key = newKey;
//   keyValue.Value = newValue; 
// }

export const postsReducer = (state = INITIAL_STATE, action) => {
  const { type , payload } = action;
  switch (type) {
    case PostActionTypes.POST_FETCH_START:
    case PostActionTypes.POST_CREATE_START:
    case PostActionTypes.POST_UPDATE_START:
    case PostActionTypes.POST_DELETE_START:
      return {
        ...state,
        isFetching: true
      };
    case PostActionTypes.POST_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: payload
      };
    case PostActionTypes.POST_FETCH_FAILURE:
    case PostActionTypes.POST_CREATE_FAILURE:
    case PostActionTypes.POST_UPDATE_FAILURE:
    case PostActionTypes.POST_DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    case PostActionTypes.POST_CREATE_SUCCESS:
    case PostActionTypes.POST_UPDATE_SUCCESS:
    case PostActionTypes.POST_DELETE_SUCCESS:
        return {
          ...state,
          isFetching: false,
        };
      
    default:
      return state;
  }
};
