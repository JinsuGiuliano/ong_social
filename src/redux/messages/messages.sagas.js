import { takeLatest, put, all, call } from 'redux-saga/effects';

import messageActionTypes from './messages.types'
import { 
    messageFetchSuccess,
    messageFetchFailure,
    messageCreateSuccess, 
    messageCreateFailure,
    messageCreateNewSuccess,
    messageCreateNewFailure
} from './messages.actions'

import { getDoc, collection, getDocs, doc, setDoc, addDoc, query, where, onSnapshot } from "firebase/firestore";
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
        yield console.log('currentUser: ',currentUser)
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
          to = currentUser.uid === toSnap.id ? sendBySnap.data() : toSnap.data(); 
          yield chats.push({ chatId:userChatsList[i].id ,messages:Nchat,...chatSnap.data(), to })
        }
      }

    yield put(messageFetchSuccess(chats));
  } catch (error) {
      yield put(messageFetchFailure(error));
    }
  }

export function* messageCreate({payload:{message, chatId}}) {
  try {
    if(chatId){
      const chatColRef = yield collection(firestore, "chats", chatId, 'messages' );
      const messageSnap = yield addDoc(chatColRef, {...message})

      yield put(messageCreateSuccess({...message, id:messageSnap.id, chatId}));
    }
  } catch (error) {
    yield put(messageCreateFailure(error));
  }
}



export function* newMessageCreate({payload:{message, to}}) {
  try {
    console.log('newMessageCreate: ', message, to)

      const user_SendBy_Ref = yield collection(firestore, 'users', message.sendBy.id, 'chats')
      const user_To_Ref = yield collection(firestore, 'users', to, 'chats' )

      let chat = {sendBy:message.sendBy.id, to:to, createdAt:message.createdAt} 
      const chatsColRef = yield collection(firestore, "chats" );

      const case_1_Ref = yield query(chatsColRef, where("sendBy", "==", message.sendBy.id), where('to', '==', to));
      const case_1 = yield getDocs(case_1_Ref)
      const case_2_Ref = yield query(chatsColRef, where("sendBy", "==", to), where('to', '==', message.sendBy.id));
      const case_2 = yield getDocs(case_2_Ref)

      let chatSnap = yield case_1.docs.length && !case_2.docs.length? case_1_Ref:  !case_2.docs.length? null : case_2_Ref;

      if(chatSnap){
        let chat = yield getDocs(chatSnap)
        let prevChatNewMessageSnap;
        for(let i in chat.docs){

          yield console.log('chatSnap.docs[i].id : ', chat.docs[i].id )
            prevChatNewMessageSnap = yield collection(firestore, 'chats', chat.docs[i].id, 'messages' )
            let prevChatAdd = yield addDoc(prevChatNewMessageSnap, message)
            yield console.log('prevChatAdd: ', prevChatAdd)
        }
        yield put(messageCreateNewSuccess({...message, id:prevChatNewMessageSnap.id}));

      }
      else{
      
        const newChatDocRef  = yield addDoc(chatsColRef, chat )
        let newChatDocSnap = yield getDoc(newChatDocRef)
  
        const chatMessagesRef = yield collection(firestore, "chats", newChatDocSnap.id, 'messages') 
        
        const messageSnap = yield addDoc(chatMessagesRef,message)
  
        console.log('messageSnap: ', messageSnap)

        yield setDoc(doc(user_SendBy_Ref, newChatDocSnap.id ), {});
    
        yield setDoc(doc(user_To_Ref, newChatDocSnap.id ), {});
        
        yield put(messageCreateNewSuccess({...message, id:messageSnap.id}));
      }
   
 
  } catch (error) {
    yield put(messageCreateNewFailure(error));
  }
}

//Actual SAGAS!
export function* onMessageFetchStart() {
    yield takeLatest(messageActionTypes.MESSAGE_FETCH_START, messageFetch);
  }

export function* onMessageCreateStart() {
  yield takeLatest(messageActionTypes.MESSAGE_CREATE_START, messageCreate);
}

export function* onMessageCreateNewStart() {
  yield takeLatest(messageActionTypes.MESSAGE_CREATE_NEW_START, newMessageCreate);
}


export function* messageSagas() {
  yield all([
    call(onMessageFetchStart),
    call(onMessageCreateStart),
    call(onMessageCreateNewStart)
  ]);
}
