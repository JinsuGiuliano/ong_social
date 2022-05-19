import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { postSagas } from './posts/posts.sagas';
import { messageSagas } from './messages/messages.sagas';

export function* rootSaga() {
  yield all([
    call(userSagas),
    call(postSagas),
    call(messageSagas)
  ]);
}
