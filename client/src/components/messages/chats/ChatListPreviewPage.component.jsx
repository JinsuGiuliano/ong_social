import React, { useEffect } from 'react';
import { ChatListContainer } from '../message.styles';
import ChatsListPreview from './chatsListPreview.component';
import { useDispatch, useSelector } from 'react-redux';
import { messageFetchStart } from '../../../redux/messages/messages.actions';
import Spinner from '../../utils/with-spinner/with-spinner.component';
import { selectIsFetching } from '../../../redux/messages/messages.selectors';

const ChatListPage =  () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(selectIsFetching)

    useEffect(() => {
        dispatch(messageFetchStart())
    }, [])

    return(
        <ChatListContainer>
        {
            isFetching?
        <Spinner/>
        :
            <ChatsListPreview />
        }
        </ChatListContainer>
    )
}

export default ChatListPage;