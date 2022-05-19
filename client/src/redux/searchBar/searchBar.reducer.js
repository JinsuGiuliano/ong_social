import SearchActionTypes from './searchBar.types'

const INITIAL_STATE = {
  search:null
};

// const UpdateItem = (keyValue, newKey, newValue) =>
// {
//   keyValue.Key = newKey;
//   keyValue.Value = newValue; 
// }

export const searchReducer = (state = INITIAL_STATE, action) => {
  const { type , payload } = action;
  switch (type) {
    case SearchActionTypes.SEARCH_FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case SearchActionTypes.SEARCH_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        search: payload
      };
    case SearchActionTypes.SEARCH_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
      
    default:
      return {...state};
  }
};
