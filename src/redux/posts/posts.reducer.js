import PostActionTypes from './posts.types'

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  isFetchingNewest: false,
  errorMessage: undefined,
  infoMessage: undefined
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
    case PostActionTypes.FETCH_NEWEST_POSTS_START:
     
        return {
          ...state,
          isFetchingNewest: true
        };
        
    case PostActionTypes.POST_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: payload
      };
    case PostActionTypes.FETCH_NEWEST_POSTS_SUCCESS:
      switch(true){
        case payload.length > 0:
          payload.map(p => state.posts.push(p))
          return {
                  ...state,
                  isFetchingNewest: false
                }
        case payload.length === 0:
          return { 
                ...state,
                isFetchingNewest: false,
                infoMessage: "There're no new posts :("
              }
          default: return {...state}
        }

      case PostActionTypes.FETCH_NEWEST_POSTS_FAILURE:
        return{
          ...state,
          isFetchingNewest: false
        }
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
         return {
          ...state,
          isFetching: false
        };
      
    case PostActionTypes.POST_UPDATE_SUCCESS:
    case PostActionTypes.POST_DELETE_SUCCESS:
        return {
          ...state,
          isFetching: false,
        };
    case PostActionTypes.POST_LIKE_SUCCESS:
      console.log('POST_LIKE_SUCCESS: ',payload)
      return{
        ...state,
        posts: state.posts.map(e => e.id === payload? {...e, likesCount: e.likesCount + 1} : e)
      }
      case PostActionTypes.RESET_MESSAGE:
        return{
          ...state,
          infoMessage: undefined
        }
    default:
      return {...state};
  }
};
