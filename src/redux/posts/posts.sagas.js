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
    postDeleteFailure,
    postLikeSuccess,
    postLikeFailure,
    postDisLikeSuccess,
    postDisLikeFailure  
} from './posts.actions'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { getDoc, collection, getDocs, doc, setDoc, addDoc, updateDoc, increment, query, where, orderBy, limit } from "firebase/firestore";
import {
  firestore, getCurrentUser
} from '../../firebase/firebase.utils'

export function* postFetch() {
    try {
      const auth = yield getCurrentUser()
      let allPosts = [];
      if(auth){ 
      const uid = auth.uid
      const userRef = yield collection(firestore,'following', uid, 'userFollowing')
      const userSnapshot = yield getDocs(userRef);
      
      for( let d in userSnapshot.docs){
        let userPostsRef = yield collection(firestore,'posts', userSnapshot.docs[d].id, 'userPosts');
        let userPostsSnap = yield getDocs(userPostsRef);
        let postUserRef = yield doc(firestore,'users', userSnapshot.docs[d].id);
        let postUserSnap = yield getDoc(postUserRef);
        userPostsSnap.docs.map(p => allPosts.push({
          ...p.data(), 
          ...postUserSnap.data(),
          id: p.id, 
          uid: userSnapshot.docs[d].id
        }))
        
      }
    }else{
      const qUsers = yield query(collection(firestore,'users'),  orderBy("createdAt", "desc", limit(15)))
      const userSnapshot = yield getDocs(qUsers);
      const UsersList = []
      userSnapshot.docs.map( u => UsersList.push(u.id))
      for(let i in UsersList){
        const q =  yield query(collection(firestore,'posts', UsersList[i], 'userPosts'), orderBy("creation", "desc", limit(20)))
        const postsSnapshot = yield getDocs(q);
        let postUserRef = yield doc(firestore,'users', UsersList[i]);
        let postUserSnap = yield getDoc(postUserRef);
        postsSnapshot.docs.forEach( p => {
          return(allPosts.push({...p.data(),...postUserSnap.data(), id:p.id, uid:postUserSnap.id}))})
      }
      
    }
      yield put(postFetchSuccess(allPosts));
    } catch (error) {
      yield put(postFetchFailure(error));
    }
  }

export function* postCreate({payload:{post, user}}) {
  try {
   
    const newPostRef = yield collection(firestore, "posts", user.id, 'userPosts');
    const postSnap = yield addDoc(newPostRef, post);
    const storage = yield getStorage();
    const fileRef = yield ref(storage, `files/${postSnap.id}`);
    
    const metadata = yield {
      contentType: post.file.type,
    };

    yield post.file && uploadBytes(fileRef, post.file, metadata).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot.ref);
    });
    const downloadURL = yield getDownloadURL(fileRef)

    yield setDoc(postSnap, {...post, file:1, filePath:downloadURL})
    
    yield put(postCreateSuccess(
      {
        ...post,
        ...user,
        filePath:downloadURL,
        uid: user.id,
        id:postSnap.id
      }
    ));
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


export function* postLike({payload:{postId, uid}}) {
  try {
    const PostRef = yield doc(firestore, "posts", uid, 'userPosts', postId );
    const postSnap = yield updateDoc(PostRef, {
      likesCount: increment(1)
    });
    yield console.log('postSnap: ',postSnap)
    yield put(postLikeSuccess(postId));
  } catch (error) {
    yield put(postLikeFailure(error));
  }
}


export function* postDislike({payload:post}) {
  try {
    const PostRef = yield doc(firestore, "posts", post.uid, 'userPosts', post.id );
    //const postSnap = yield setDoc(newPostRef, post).then();
    const postSnap = yield updateDoc(PostRef, {
      likesCount: firestore.FieldValue.increment(1)
    });
    yield console.log('postSnap: ',postSnap)
    yield put(postDisLikeSuccess(post));
  } catch (error) {
    yield put(postDisLikeFailure(error));
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

export function* onPostLikeStart() {
  yield takeLatest(PostActionTypes.POST_LIKE_START, postLike);
}

export function* onPostDisLikeStart() {
  yield takeLatest(PostActionTypes.POST_DISLIKE_START, postDislike);
}


export function* postSagas() {
  yield all([
    call(onPostFetchStart),
    call(onPostCreateStart),
    call(onPostUpdateStart),
    call(onPostDeleteStart),
    call(onPostLikeStart),
    call(onPostDisLikeStart)
  ]);
}
