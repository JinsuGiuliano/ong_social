import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchOneUserSuccess,
  fetchOneUserFailure,
  followSuccess,
  followFailure,
  unfollowSuccess,
  unfollowFailure,
  fetchFollowSuccess,
  fetchFollowFailure,
  postSaveSuccess,
  postSaveFailure,
  postUnSaveSuccess,
  postUnSaveFailure,
  updateUserSuccess,
  updateUserFailure,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  fetchUserPostsSuccess,
  fetchUserPostsFailure,
} from "./user.actions";
import {
  signOut as signOutLib,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import {
  getDoc,
  getDocs,
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  increment,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  listAll,
} from "firebase/storage";
import {
  provider,
  createUserProfileDocument,
  getCurrentUser,
  firestore,
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );

    const saved = [];

    const userSnapshot = yield getDoc(userRef);

    const savedRef = yield collection(
      firestore,
      "saved",
      userSnapshot.id,
      "postsSaved"
    );
    const savedSnap = yield getDocs(savedRef);

    for (let i in savedSnap.docs) {
      let postSavedRef = yield doc(
        firestore,
        "posts",
        userSnapshot.id,
        "userPosts",
        savedSnap.docs[i].id
      );
      let postSavedSnap = yield getDoc(postSavedRef);
      let userRef = yield doc(firestore, "users", userSnapshot.id);
      let userSnap = yield getDoc(userRef);
      saved.push({
        ...userSnap.data(),
        id: postSavedSnap.id,
        ...postSavedSnap.data(),
        uid: userSnap.id,
      });
    }
    const Following = [];
    const followingUsersRef = yield collection(
      firestore,
      "following",
      userSnapshot.id,
      "userFollowing"
    );
    const followingUserSnap = yield getDocs(followingUsersRef);

    yield followingUserSnap.docs.forEach((e) => Following.push(e.id));

    const categories = [];

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
        photo: userSnapshot.data().photo,
        saved: saved,
        following: Following,
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* fetchUsersAsync() {
  try {
    const q = query(
      collection(firestore, "users"),
      orderBy("createdAt", "desc", limit(15))
    );
    const userSnapshot = yield getDocs(q);
    const Users = [];
    userSnapshot.docs.map((u) => Users.push({ ...u.data(), id: u.id }));
    yield console.log("USERS: ", Users);
    yield put(fetchUsersSuccess(Users));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export function* fetchOneUserAsync({ payload: { id } }) {
  try {
    const userRef = yield doc(firestore, "users", id);
    const userSnapshot = yield getDoc(userRef);
    const User = { ...userSnapshot.data(), id: userSnapshot.id };
    yield put(fetchOneUserSuccess(User));
  } catch (error) {
    yield put(fetchOneUserFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const auth = getAuth();
    const { user } = yield signInWithPopup(auth, provider);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* walletSignInStart() {
  try {
    const auth = getAuth();
    const { user } = yield signInWithPopup(auth, provider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const auth = getAuth();
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
    const auth = getAuth();
    yield signOutLib(auth);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const auth = getAuth();
    const { user } = yield createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* followAsync({ payload: userId }) {
  try {
    const auth = yield getCurrentUser();
    const uid = auth.uid;
    yield console.log("follow: ", userId);

    const followingRef = yield doc(
      firestore,
      "following",
      uid,
      "userFollowing",
      userId
    );
    yield setDoc(followingRef, {});

    const followersRef = yield doc(
      firestore,
      "followers",
      userId,
      "userFollower",
      uid
    );
    yield setDoc(followersRef, {});

    yield put(followSuccess(userId));
  } catch (error) {
    yield put(followFailure(error));
  }
}

export function* unfollowAsync({ payload: userId }) {
  try {
    const uid = yield getCurrentUser();
    yield console.log("follow: ", userId);

    const followingRef = yield doc(
      firestore,
      "following",
      uid.uid,
      "userFollowing",
      userId
    );
    yield deleteDoc(followingRef, {});

    const followerRef = yield doc(
      firestore,
      "followers",
      userId,
      "userFollower",
      uid.uid
    );
    yield deleteDoc(followerRef, {});

    yield put(unfollowSuccess(userId));
  } catch (error) {
    yield put(unfollowFailure(error));
  }
}

// export function* fetchFollowAsync() {
//   try {
//     const auth = yield getCurrentUser()
//     const uid = auth.uid

//     const Following = []
//     const followingUsersRef = yield collection(firestore, "following",  uid, 'userFollowing')
//     const followingUserSnap = yield getDocs(followingUsersRef)

//     yield followingUserSnap.docs.forEach(e => Following.push(e.id));

//     yield put(fetchFollowSuccess(Following));
//   } catch (error) {
//     yield put(fetchFollowFailure(error));
//   }
// }

export function* savePostAsync({ payload: data }) {
  try {
    const { uid, id } = data;
    const auth = yield getCurrentUser();
    const currentUserUID = auth.uid;
    const savedRef = yield doc(
      firestore,
      "saved",
      currentUserUID,
      "postsSaved",
      id
    );
    yield setDoc(savedRef, {});

    const PostRef = yield doc(firestore, "posts", uid, "userPosts", id);
    yield updateDoc(PostRef, {
      retweetCount: increment(1),
    });

    yield put(postSaveSuccess(data));
  } catch (error) {
    yield put(postSaveFailure(error));
  }
}

export function* unSavePostAsync({ payload: data }) {
  try {
    const { uid, id } = data;
    const auth = yield getCurrentUser();
    const currentUserUID = auth.uid;
    const savedRef = yield doc(
      firestore,
      "saved",
      currentUserUID,
      "postsSaved",
      id
    );
    yield deleteDoc(savedRef, {});

    const PostRef = yield doc(firestore, "posts", uid, "userPosts", id);
    yield updateDoc(PostRef, {
      retweetCount: increment(-1),
    });

    yield put(postUnSaveSuccess(data));
  } catch (error) {
    yield put(postUnSaveFailure(error));
  }
}

export function* updateUserAsync({ payload: user }) {
  try {
    const auth = yield getCurrentUser();
    const uid = auth.uid;
    const storage = yield getStorage();
    const userRef = yield doc(firestore, "users", uid);
    let nUser = user;

    if (!user.hasOwnProperty("files")) {
      yield updateDoc(userRef, {
        ...user,
        photo: auth.providerData[0].photoURL,
      });
      yield put(updateUserSuccess(user));
    }

    if (user.hasOwnProperty("files")) {
      if (typeof user.photo === "object") {
        const PhotoRef = yield ref(storage, `${uid}/${user.photo.name}`);
        const metadata = yield {
          contentType: user.photo.type,
        };
        yield uploadBytes(PhotoRef, user.photo, metadata).then((snapshot) => {
          console.log("Uploaded a blob or file!", snapshot.ref);
        });
        const downloadURL = yield getDownloadURL(PhotoRef);

        nUser = { ...nUser, photo: downloadURL };
        yield updateDoc(userRef, nUser);
      }

      if (typeof user.photoBg === "object") {
        const PhotoBgRef = yield ref(storage, `${uid}/${user.photoBg.name}`);
        const metadata = yield {
          contentType: user.photoBg.type,
        };
        yield uploadBytes(PhotoBgRef, user.photoBg, metadata).then(
          (snapshot) => {
            console.log("Uploaded a blob or file!", snapshot.ref);
          }
        );
        const downloadURL = yield getDownloadURL(PhotoBgRef);
        nUser = { ...nUser, photoBg: downloadURL };
        yield updateDoc(userRef, nUser);
      }

      yield put(updateUserSuccess({ ...nUser }));
    }
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

export function* fetchUserProfileAsync({ payload: userId }) {
  try {
    const storage = yield getStorage();
    const ImagesRef = yield ref(storage, `${userId}`);
    const ImageRefList = yield listAll(ImagesRef);
    const images = [];
    console.log("URL: ", ImageRefList.items);

    for (let r in ImageRefList.items) {
      const URL = yield getDownloadURL(ImageRefList.items[r]);
      images.push(URL);
    }

    let posts = [];
    let follwing = [];
    let followers = [];
    let saved = [];

    const userRef = yield doc(firestore, "users", userId);
    const userSnap = yield getDoc(userRef);

    const postsRef = yield collection(firestore, "posts", userId, "userPosts");
    const postsSnap = yield getDocs(postsRef);
    postsSnap.docs.map((u) =>
      posts.push({ ...u.data(), id: u.id, ...userSnap.data() })
    );

    const followingRef = yield collection(
      firestore,
      "following",
      userId,
      "userFollowing"
    );
    const followingSnap = yield getDocs(followingRef);
    followingSnap.docs.map((u) => follwing.push(u.id));

    const followersgRef = yield collection(
      firestore,
      "followers",
      userId,
      "userFollowers"
    );
    const followersSnap = yield getDocs(followersgRef);
    followersSnap.docs.map((u) => followers.push(u.id));

    const savedRef = yield collection(firestore, "saved", userId, "postSaved");
    const savedSnap = yield getDocs(savedRef);
    savedSnap.docs.map((u) => saved.push(u.id));

    yield put(
      fetchUserProfileSuccess({
        id: userId,
        user: userSnap.data(),
        posts: posts,
        following: follwing,
        followers: followers,
        images: images,
      })
    );
  } catch (error) {
    yield put(fetchUserProfileFailure(error));
  }
}

export function* fetchUserPostsAsync() {
  try {
    const auth = yield getCurrentUser();
    const uid = auth.uid;
    let allPosts = [];
    let userPostsRef = yield collection(firestore, "posts", uid, "userPosts");
    let userPostsSnap = yield getDocs(userPostsRef);

    userPostsSnap.docs.map((p) =>
      allPosts.push({
        ...p.data(),
        id: p.id,
      })
    );

    yield put(fetchUserPostsSuccess(allPosts));
  } catch (error) {
    yield put(fetchUserPostsFailure(error));
  }
}

//Actual SAGAS!
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onWalletSignInStart() {
  yield takeLatest(UserActionTypes.WALLET_SIGN_IN_START, signInWithGoogle);
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

// export function* onFetchFollowing() {
//   yield takeLatest(UserActionTypes.FETCH_FOLLOW_START, fetchFollowAsync);
// }

export function* onSavePostAsync() {
  yield takeLatest(UserActionTypes.POST_SAVE_START, savePostAsync);
}

export function* onUnSavePostAsync() {
  yield takeLatest(UserActionTypes.POST_UNSAVE_START, unSavePostAsync);
}

export function* onUpdateUserAsync() {
  yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserAsync);
}

export function* onFetchUserProfileAsync() {
  yield takeLatest(
    UserActionTypes.FETCH_USER_PROFILE_START,
    fetchUserProfileAsync
  );
}

export function* onFetchUserPostsAsync() {
  yield takeLatest(UserActionTypes.FETCH_USER_POSTS_START, fetchUserPostsAsync);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onWalletSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onFetchUsersAsync),
    call(onFollowAsync),
    call(onUnFollowAsync),
    //call(onFetchFollowing),
    call(onSavePostAsync),
    call(onUnSavePostAsync),
    call(onUpdateUserAsync),
    call(onFetchUserProfileAsync),
    call(onFetchUserPostsAsync),
  ]);
}
