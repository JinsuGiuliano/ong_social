import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { postsReducer } from './posts/posts.reducer';
import { searchReducer } from './searchBar/searchBar.reducer';
import { messagesReducer } from './messages/messages.reducer';


export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  search: searchReducer,
  messages: messagesReducer
});


export const testRootReducer = {
  user: userReducer,
  posts: postsReducer,
  search: searchReducer,
  messages: messagesReducer
};
