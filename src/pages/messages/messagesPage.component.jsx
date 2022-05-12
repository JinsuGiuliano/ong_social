import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MessagesListPage from '../../components/messages/messageList.component';
import ChatScreen from './chat/chatScreen.component';

const MessagesPage =  () => {
    return(
        <Routes>
            <Route index element={<MessagesListPage />} />
            <Route path=':chatId' element={<ChatScreen />} />
      </Routes>
    )
}

export default MessagesPage;