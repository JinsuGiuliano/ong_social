import React from 'react';
import { useSelector } from 'react-redux';
import {selectAllChats } from '../../../redux/messages/messages.selectors';
import ChatPreview from './chatPreview.component';
import { ChatPreviewContainer } from './chat.styles';


const ChatsListPreview = () => {
    
    const chats = useSelector(selectAllChats)
    return(
            <ChatPreviewContainer>
            {
              chats &&
                chats.map( (chat, idx) =>
                    <ChatPreview key={idx} id={Object.keys(chat)[0]} chat={{...chat[Object.keys(chat)[0]]}}/>
                )
            }
            </ChatPreviewContainer>
    )
}

export default ChatsListPreview;