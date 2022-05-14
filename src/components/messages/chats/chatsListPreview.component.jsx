import React from 'react';
import { useSelector } from 'react-redux';
import {selectAllChats } from '../../../redux/messages/messages.selectors';
import ChatPreview from './chatPreview.component';
import { ChatPreviewContainer, ChatListTitle, ChatsTopContainer, ChatsContainer } from './chat.styles';


const ChatsListPreview = () => {
    
    const chats = useSelector(selectAllChats)
    return(
            <ChatPreviewContainer>
            <ChatsTopContainer>
                <ChatListTitle>Chats con otros Usuarios</ChatListTitle>
            </ChatsTopContainer>
            <ChatsContainer>
            {
              chats &&
                chats.map( (chat, idx) =>
                    <ChatPreview key={idx} id={chat.chatId} chat={chat}/>
                )
            }
            </ChatsContainer>
            </ChatPreviewContainer>
    )
}

export default ChatsListPreview;