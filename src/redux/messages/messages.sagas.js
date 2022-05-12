import { takeLatest, put, all, call } from 'redux-saga/effects';

import messageActionTypes from './messages.types'
import { 
    messageFetchSuccess,
    messageFetchFailure,
    messageCreateSuccess, 
    messageCreateFailure,
} from './messages.actions'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { getDoc, collection, getDocs, doc, setDoc, addDoc, updateDoc, increment } from "firebase/firestore";
import {
  firestore, getCurrentUser
} from '../../firebase/firebase.utils'


export function* messageFetch() {
    try {
        const currentUser = yield getCurrentUser()
        const userChatsRef = yield collection(firestore,'users', currentUser.uid, 'chats')
        const userChatsSnap = yield getDocs(userChatsRef);
        const chats = [];
        const userChatsList = userChatsSnap.docs

      for(let i in userChatsList){
        let Nchat = [];
        let messagesRef =  collection(firestore,'chats', userChatsList[i].id, 'messages');
        let messagesSnap = yield getDocs(messagesRef);
        let chatRef = doc(firestore,'chats', userChatsList[i].id)
        let chatSnap = yield getDoc(chatRef)
        let  to;
        messagesSnap.docs.forEach((message) => Nchat.push({id: message.id, ...message.data()} )) 
         

        if(chatSnap.data()){
          let toRef = yield  doc(firestore, 'users', chatSnap.data().to )
          let sendByRef =  yield doc(firestore, 'users', chatSnap.data().sendBy )
          let  toSnap = yield getDoc(toRef)
          let  sendBySnap = yield getDoc(sendByRef)
          to = currentUser.uid === toSnap.data().id ? sendBySnap.data() : toSnap.data(); 
          yield chats.push({[ userChatsList[i].id ]:{ messages:Nchat,...chatSnap.data(), to }})
        }
      }

    yield put(messageFetchSuccess(chats));
  } catch (error) {
      yield put(messageFetchFailure(error));
    }
  }

export function* messageCreate({payload:{message, sendBy, to}}) {
  try {
    const currentUser = yield getCurrentUser()

    if(message.chatId){
      const chatColRef = yield collection(firestore, "chats", message.chatId, 'messages' );
      const messageSnap = yield addDoc(chatColRef, {...message})

      yield put(messageCreateSuccess({...message, id:messageSnap.id}));
    }

    const chatsColRef = yield collection(firestore, "chats" );
    const newChatDocRef  = yield addDoc(chatsColRef, {sendBy:sendBy, to:to, createdAt:message.createdAt})
    
    const chatMessagesRef = yield collection(firestore, "chats", newChatDocRef.id, 'messages') 
    const messageSnap = yield addDoc(chatMessagesRef, {...message})

    const user_SendBy_Ref = collection(firestore, 'users', currentUser.uid, 'chats')
    const user_To_Ref = collection(firestore, 'users', to, 'chats' )

    yield setDoc(doc(user_SendBy_Ref, newChatDocRef.id ), {});

    yield setDoc(doc(user_To_Ref, newChatDocRef.id ), {});
    
    yield put(messageCreateSuccess({...message, id:messageSnap.id}));
  } catch (error) {
    yield put(messageCreateFailure(error));
  }
}


//Actual SAGAS!
export function* onMessageFetchStart() {
    yield takeLatest(messageActionTypes.MESSAGE_FETCH_START, messageFetch);
  }

export function* onMessageCreateStart() {
  yield takeLatest(messageActionTypes.MESSAGE_CREATE_START, messageCreate);
}



export function* messageSagas() {
  yield all([
    call(onMessageFetchStart),
    call(onMessageCreateStart)
  ]);
}
