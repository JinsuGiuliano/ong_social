import { takeLatest, put, all, call } from 'redux-saga/effects';

import PostActionTypes from './posts.types'
import { 
    postFetchSuccess, postFetchFailure,
    postCreateFailure, postCreateSuccess as postCreateSuccessPost,
    postUpdateSuccess,  postUpdateFailure, 
    postDeleteSuccess,  postDeleteFailure,
    postLikeSuccess, postLikeFailure,
    postDisLikeSuccess, postDisLikeFailure,
    postFetchNewestSuccess, postFetchNewestFailure,
    postRetweetSuccess, postRetweetFailure
} from './posts.actions'

import { postCreateSuccess } from '../user/user.actions';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { getDoc, collection, getDocs, doc, setDoc, addDoc, updateDoc, increment, query, where, orderBy, limit, collectionGroup } from "firebase/firestore";
import {
  firestore, getCurrentUser
} from '../../firebase/firebase.utils'

export function* postFetch() {
    try {
        
        let allPosts = [];

        const q =  yield query(collectionGroup(firestore,'userPosts'), orderBy("createdAt", "desc"), limit(20))
        const postsSnapshot = yield getDocs(q);
        yield console.log('postsSnapshot: ', postsSnapshot.docs)

        if(postsSnapshot.docs.length > 0){

          for(var i in postsSnapshot.docs){
            let p = postsSnapshot.docs[i]; 
            yield console.log('post: ', p)
            const qUser = yield doc(firestore,'users', p.data().createdBy)
            const userSnapshot = yield getDoc(qUser);
            let user = {...userSnapshot.data(), id:userSnapshot.id }

            allPosts.push({...p.data(),...user, createdAt:p.data().createdAt, id:p.id, uid:user.id}
          )

        }
      }else{
        yield console.log('NO HAY NUEVOS POSTS!')
      }
      yield put(postFetchSuccess(allPosts));
    } catch (error) {
      yield put(postFetchFailure(error));
    }
  }



  export function* postFetchNewest({payload:last}) {
    try {
     
        let allPosts = [];

        const colGroupRef = collectionGroup(firestore,'userPosts')
        const q =  yield query(colGroupRef,where("createdAt", ">", last),orderBy("createdAt", "desc"), limit(10))
        const postsSnapshot = yield getDocs(q);

        if(postsSnapshot.docs.length > 0){ 
          for(var i in postsSnapshot.docs){
            let p = postsSnapshot.docs[i]; 
            const qUser = yield doc(firestore,'users', p.data().createdBy)
            const userSnapshot = yield getDoc(qUser);
            let user = {...userSnapshot.data(), id:userSnapshot.id }

            allPosts.push({...p.data(),...user, createdAt:p.data().createdAt, id:p.id, uid:user.id}
          )

          }
        }else{
          yield console.log('There are no new Posts', allPosts)
        }

      
      yield put(postFetchNewestSuccess(allPosts));
    } catch (error) {
      yield put(postFetchNewestFailure(error));
    }
  }

export function* postCreate({payload:{post, user}}) {
  try {
   
    const newPostRef = yield collection(firestore, "posts", user.id, 'userPosts');
    const postSnap = yield addDoc(newPostRef, {...post, file:1});

   if(post.file !== null){ 
     const storage = yield getStorage();
     const fileRef = yield ref(storage, `files/${postSnap.id}`);
    
      const metadata = yield {
        contentType: post.file.type,
      };

      yield post.file && uploadBytes(fileRef, post.file, metadata).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot.ref);
      });
      const downloadURL = yield getDownloadURL(fileRef)

      yield setDoc(postSnap, {...post, createdBy:user.id, file:1, filePath:downloadURL})
      yield put(postCreateSuccess(
        {
          ...post,
          ...user,
          createdAt:post.createdAt,
          createdBy: user.id,
          filePath:downloadURL,
          uid: user.id,
          id:postSnap.id
        }
      ));
     
    }else{
      yield setDoc(postSnap, {...post})
      yield put(postCreateSuccess(
        {
          ...post,
          ...user,
          createdAt:post.createdAt,
          uid: user.id,
          id:postSnap.id
        }
      ));
    }
    yield put(postCreateSuccessPost())
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
    yield updateDoc(PostRef, {
      likesCount: firestore.FieldValue.increment(1)
    });
    yield put(postDisLikeSuccess(post));
  } catch (error) {
    yield put(postDisLikeFailure(error));
  }
}


export function* postRetweet({payload:{postId, uid}}) {
  try {
    const PostRef = yield doc(firestore, "posts", uid, 'userPosts', postId );
   const doc = yield updateDoc(PostRef, {
      retweetCount: increment(1)
    });
    yield console.log('doc: ',doc)
    yield put(postRetweetSuccess(postId));
  } catch (error) {
    yield put(postRetweetFailure(error));
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

export function* onPostFetchNewestStart() {
  yield takeLatest(PostActionTypes.FETCH_NEWEST_POSTS_START, postFetchNewest);
}


export function* postSagas() {
  yield all([
    call(onPostFetchStart),
    call(onPostCreateStart),
    call(onPostUpdateStart),
    call(onPostDeleteStart),
    call(onPostLikeStart),
    call(onPostDisLikeStart),
    call(onPostFetchNewestStart)
  ]);
}
