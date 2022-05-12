import React, { Fragment } from 'react'

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
    const messages = selectChat.messages.sort((a, b )=> a.createdAt - b.createdAt )
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
                            <Message key={idx} data={msg} current={msg.sendBy === currentUser.id? true: false}/>
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