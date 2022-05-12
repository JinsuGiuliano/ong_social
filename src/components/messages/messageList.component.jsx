import React, { useEffect } from 'react';
import { MessagesListContainer } from './message.styles';
import ChatsListPreview from '../../components/messages/chats/chatsListPreview.component';
import { useDispatch, useSelector } from 'react-redux';
import { messageFetchStart } from '../../redux/messages/messages.actions';
import Spinner from '../../components/utils/with-spinner/with-spinner.component';
import { selectIsFetching } from '../../redux/messages/messages.selectors';

const MessagesListPage =  () => {
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

export default MessagesListPage;