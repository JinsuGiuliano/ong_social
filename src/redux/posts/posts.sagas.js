import { takeLatest, put, all, call } from 'redux-saga/effects';

import PostActionTypes from './posts.types'
import { 
    postFetchSuccess,
    postFetchFailure,
    postCreateSuccess, 
    postCreateFailure, 
    postUpdateSuccess, 
    postUpdateFailure, 
    postDeleteSuccess, 
    postDeleteFailure  
} from './posts.actions'

import { getDoc, collection, getDocs, doc } from "firebase/firestore";
import {
  firestore
} from '../../firebase/firebase.utils'


export function* postFetch() {
    try {
      const userRef = yield collection(firestore,'users')
      const userSnapshot = yield getDocs(userRef);
      const allPosts = [];
      for( let d in userSnapshot.docs){
        let userPostsRef = yield collection(firestore,'posts', userSnapshot.docs[d].id, 'userPosts');
        let userPostsSnap = yield getDocs(userPostsRef);
        let postUserRef = yield doc(firestore,'users', userSnapshot.docs[d].id);
        let postUserSnap = yield getDoc(postUserRef);
        userPostsSnap.docs.map(d => allPosts.push({...d.data(), id: d.id, ...postUserSnap.data()}))
        
      }
      yield put(postFetchSuccess(allPosts));
    } catch (error) {
      yield put(postFetchFailure(error));
    }
  }

export function* postCreate() {
  try {

    yield put(postCreateSuccess());
  } catch (error) {
    yield put(postCreateFailure(error));
  }
}

export function* postUpdate() {
  try {

    yield postUpdateSuccess();
  } catch (error) {
    yield put(postUpdateFailure(error));
  }
}

export function* postDelete() {
  try {

    yield postDeleteSuccess();
  } catch (error) {
    yield put(postDeleteFailure(error));
  }
}

//Actual SAGAS!
export function* onPostFetchStart() {
    yield takeLatest(PostActionTypes.POST_FETCH_START, postFetch);
  }

export function* onPostCreateStart() {
  yield takeLatest(PostActionTypes.POST_CREATE_START, postCreate);
}

export function* onPostUpdateStart() {
  yield takeLatest(PostActionTypes.POST_UPDATE_START,postUpdate);
}

export function* onPostDeleteStart() {
  yield takeLatest(PostActionTypes.POST_DELETE_START, postDelete);
}


export function* postSagas() {
  yield all([
    call(onPostFetchStart),
    call(onPostCreateStart),
    call(onPostUpdateStart),
    call(onPostDeleteStart)
  ]);
}
