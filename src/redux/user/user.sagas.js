import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  fetchUsersSuccess,
  fetchUsersFailure,
  followSuccess,
  followFailure,
  unfollowSuccess,
  unfollowFailure,
  fetchFollowSuccess,
  fetchFollowFailure,
  postSaveSuccess,
  postSaveFailure,
  postUnSaveSuccess,
  postUnSaveFailure
} from './user.actions';
import {signOut as signOutLib, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDoc, getDocs, collection ,doc, setDoc, deleteDoc} from "firebase/firestore";
import {
  provider,
  createUserProfileDocument,
  getCurrentUser,
  firestore
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield getDoc(userRef);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data(), photo:userAuth.photoURL?userAuth.photoURL: userSnapshot.data().photo }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* fetchUsersAsync() {
  try {
    const userRef = yield collection(firestore,'users')
    const userSnapshot = yield getDocs(userRef);
    const Users = []
    userSnapshot.docs.map( u => Users.push({...u.data(), id:u.id}))
    yield console.log('USERS: ',Users)
    yield put(fetchUsersSuccess(Users));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const auth = getAuth()
    const { user } = yield signInWithPopup(auth,provider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const auth = getAuth()
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    const auth = getAuth()
    yield signOutLib(auth);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const auth = getAuth();
    const { user } = yield createUserWithEmailAndPassword(auth, email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}


export function* followAsync({ payload: userId  }) {
  try {
    const uid = yield getAuth().currentUser.uid
    yield console.log('follow: ', userId)
    const followingRef = yield doc(firestore, "following", uid, 'userFollowing', userId);
    yield setDoc(followingRef, {});
    yield put(followSuccess(userId));
  } catch (error) {
    yield put(followFailure(error));
  }
}


export function* unfollowAsync({ payload: userId  }) {
  try {
    const uid = yield getAuth().currentUser.uid
    yield console.log('follow: ', userId)
    const followingRef = yield doc(firestore, "following", uid, 'userFollowing', userId);
    yield deleteDoc(followingRef, {});
    yield put(unfollowSuccess(userId));
  } catch (error) {
    yield put(unfollowFailure(error));
  }
}

export function* fetchFollowAsync() {
  try {
    const uid = yield getAuth().currentUser.uid
    yield console.log('follow: ', uid)
    const Following = []
    const followingUsersRef = yield collection(firestore, "following",  uid, 'userFollowing')
    const followingUserSnap = yield getDocs(followingUsersRef)
    followingUserSnap.docs.map(e => Following.push(e.id));
    yield put(fetchFollowSuccess(Following));
  } catch (error) {
    yield put(fetchFollowFailure(error));
  }
}

export function* savePostAsync({ payload: userId  }) {
  try {
    const uid = yield getAuth().currentUser.uid
    yield console.log('saved: ', userId)
    const savedRef = yield doc(firestore, "saved", uid, 'postsSaved', userId);
    yield setDoc(savedRef, {});
    yield put(postSaveSuccess(userId));
  } catch (error) {
    yield put(postSaveFailure(error));
  }
}

export function* unSavePostAsync({ payload: userId  }) {
  try {
    const uid = yield getAuth().currentUser.uid
    yield console.log('saved: ', userId)
    const savedRef = yield doc(firestore, "saved", uid, 'postsSaved', userId);
    yield deleteDoc(savedRef, {});
    yield put(postUnSaveSuccess(userId));
  } catch (error) {
    yield put(postUnSaveFailure(error));
  }
}

//Actual SAGAS!
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onFetchUsersAsync() {
  yield takeLatest(UserActionTypes.FETCH_USERS_START, fetchUsersAsync);
}

export function* onFollowAsync() {
  yield takeLatest(UserActionTypes.FOLLOW_START, followAsync);
}

export function* onUnFollowAsync() {
  yield takeLatest(UserActionTypes.UNFOLLOW_START, unfollowAsync);
}

export function* onFetchFollowing() {
  yield takeLatest(UserActionTypes.FETCH_FOLLOW_START, fetchFollowAsync);
}

export function* onSavePostAsync() {
  yield takeLatest(UserActionTypes.POST_SAVE_START, savePostAsync);
}

export function* onUnSavePostAsync() {
  yield takeLatest(UserActionTypes.POST_UNSAVE_START, unSavePostAsync);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onFetchUsersAsync),
    call(onFollowAsync),
    call(onUnFollowAsync),
    call(onFetchFollowing),
    call(onSavePostAsync),
    call(onUnSavePostAsync)
  ]);
}
