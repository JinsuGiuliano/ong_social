import React, { useEffect } from 'react';
import { MessagesListContainer } from './messagesPage.styles';

import ChatScreen from './chat/chatScreen.component';
import ChatsListPreview from '../../components/messages/chats/chatsListPreview.component';
import { useDispatch, useSelector } from 'react-redux';
import { messageFetchStart } from '../../redux/messages/messages.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Spinner from '../../components/utils/with-spinner/with-spinner.component';
import { selectIsFetching } from '../../redux/messages/messages.selectors';

const MessagesPage =  () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(selectIsFetching)

    useEffect(() => {
        dispatch(messageFetchStart())
    }, [])

    return(
        <MessagesListContainer>
        {
            isFetching?
        <Spinner/>
        :
            <ChatsListPreview />
        }
        </MessagesListContainer>
    )
}

export default MessagesPage;