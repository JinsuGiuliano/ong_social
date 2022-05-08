import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { postsReducer } from './posts/posts.reducer';
import { searchReducer } from './searchBar/searchBar.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  search: searchReducer
});
