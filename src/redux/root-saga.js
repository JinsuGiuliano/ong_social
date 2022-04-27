import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { postSagas } from './posts/posts.sagas';
export function* rootSaga() {
  yield all([
    call(userSagas),
    call(postSagas)
  ]);
}
