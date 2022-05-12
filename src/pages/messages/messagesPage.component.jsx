import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatListPage from '../../components/messages/chats/ChatListPreviewPage.component';
import ChatScreen from './chat/chatScreen.component';

const MessagesPage =  () => {
    return(
        <Routes>
            <Route index element={<ChatListPage />} />
            <Route path=':chatId' element={<ChatScreen />} />
      </Routes>
    )
}

export default MessagesPage;