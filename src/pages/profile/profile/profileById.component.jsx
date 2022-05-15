import React, { Fragment, useState} from 'react';
import {  useSelector } from 'react-redux';
import { PostContainer, TopProfile, ProfileName, ProfileEmail, 
    CalendarIcon, JoinContainer,ProfilePhoto, SendMessageButton, MessageIcon,
    SendText, 
    UserProfileInfoContainer} from './profile.styles';

import { selectIsFetching, selectProfilePageState } from '../../../redux/user/user.selectors';
import Spinner from '../../../components/utils/with-spinner/with-spinner.component';
import UserTabs from './tabs/userTabs.components';
import NewMessageForm from '../../../components/messages/newMessage/newMessage.component';

const ProfileById =  () => {

    const [ newMessage, setNewMessage] = useState(false)
    const profile = useSelector(selectProfilePageState);
    const isFetching = useSelector(selectIsFetching);
    const { user, id } =  profile && profile;

    return(
        <Fragment>
        {
            isFetching ?
            <div>
                <Spinner/>
            </div>
            :
            <Fragment>
                <PostContainer>
                {
                    newMessage && 
                    <NewMessageForm setNewMessage={setNewMessage} newMessage={newMessage} to={id}/>
                }
                {
                    user &&
                    <Fragment>
                    <TopProfile imageUrl={user.photoBg}>
                        <ProfilePhoto imageUrl={user.photo}/>
                        <UserProfileInfoContainer >
                            <ProfileName>{user.name.toUpperCase()}</ProfileName>
                            <ProfileEmail>{user.email}</ProfileEmail>
                            <JoinContainer>
                                <div><CalendarIcon color='white'/></div>
                            </JoinContainer>
                            <SendMessageButton onClick={()=>setNewMessage(!newMessage)}>
                                <SendText>ENVIAR MENSAJE</SendText>
                                <MessageIcon/>
                            </SendMessageButton>
                        </UserProfileInfoContainer>
                    </TopProfile>
                    </Fragment>
                }
                <UserTabs isProfileById {...profile} />
            </PostContainer>
    
            </Fragment>
        }
        </Fragment>
    )
}

export default ProfileById;