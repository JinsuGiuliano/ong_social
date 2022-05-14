import React, { Fragment, useEffect, useState } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from '../../../firebase/firebase.utils';
import { ChatMessagesContainer, ChatInfo, SendMessageContainer , MessagesList} from './chatScreen.styles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectChatMessages } from '../../../redux/messages/messages.selectors';
import { selectCurrentUser } from '../../../redux/user/user.selectors';


import Message from '../../../components/messages/message.component';
import SendMessage from '../../../components/messages/sendMessage.component';
import ChatPreview from '../../../components/messages/chats/chatPreview.component';

const ChatScreen = () => {
    
    const currentUser = useSelector(selectCurrentUser)
    const {chatId} = useParams()
    const selectChat = useSelector(selectChatMessages(chatId))
    const messagesSelection = selectChat.messages.sort((a, b )=> a.createdAt - b.createdAt )

    const queryMessages = query(collection(firestore, "chats", chatId, 'messages'))

    const [ messages, setMessages ] = useState(messagesSelection)

    useEffect(()=>{
        const unsubscribe = onSnapshot(queryMessages, (querySnapshot) => {
            const data = querySnapshot.docs.map(doc =>{ 
            return({
                ...doc.data(),
                id: doc.id,
            })});
            console.log('data: ', data)

            setMessages(data.sort((a, b )=> a.createdAt - b.createdAt ));
        });
        return unsubscribe;
    },[])
    return(
        <Fragment>
            <ChatMessagesContainer>
            <ChatInfo>
                <ChatPreview chat={selectChat} id={selectChat.id} onView/>
            </ChatInfo>
            <MessagesList>
                {
                 
                    messages &&
                    messages.map((msg, idx) =>
                            <Message key={idx} text={msg.text} current={msg.sendBy === currentUser.id? true: false}/>
                            )

                }
            </MessagesList>
                <SendMessageContainer>
                    <SendMessage to={selectChat.to} chatId={chatId}/>
                </SendMessageContainer>
            </ChatMessagesContainer>
    </Fragment>
    )
}

export default ChatScreen;