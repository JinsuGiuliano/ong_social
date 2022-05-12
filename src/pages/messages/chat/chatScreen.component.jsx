import React from 'react'

import { ChatContainer, ChatMessagesContainer } from './chatScreen.styles';
import SendMessage from '../../../components/messages/sendMessage.component';

const ChatScreen = () => {

    return(
        <ChatContainer>
            <ChatMessagesContainer>
            </ChatMessagesContainer>
            <SendMessage/>
        </ChatContainer>
    )
}

export default ChatScreen;