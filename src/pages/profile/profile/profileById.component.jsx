import React, { Fragment, useState} from 'react';
import {  useSelector } from 'react-redux';
import { PostContainer, TopProfile, ProfileName, ProfileEmail, 
    CalendarIcon, JoinContainer,ProfilePhoto, SendMessageButton, MessageIcon,
    SendText, 
    UserProfileInfoContainer,
    ActionsWithUser,
    ProfileDescription} from './profile.styles';

import { selectIsFetching, selectProfilePageState } from '../../../redux/user/user.selectors';
import Spinner from '../../../components/utils/with-spinner/with-spinner.component';
import UserTabs from './tabs/userTabs.components';
import NewMessageForm from '../../../components/messages/newMessage/newMessage.component';
import { Outlet } from 'react-router-dom';

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
                            <ProfileName>{user.username.toUpperCase()}</ProfileName>
                            <ProfileEmail>{user.email}</ProfileEmail>
                            <JoinContainer>
                            <div><ProfileDescription>{`" ${ user.description} "`}</ProfileDescription></div>
                            </JoinContainer>
                        </UserProfileInfoContainer>
                    </TopProfile>
                   
                    </Fragment>
                }
            
                <UserTabs isProfileById {...profile} setNewMessage={setNewMessage} newMessage={newMessage}/>
              
            </PostContainer>
    
            </Fragment>
        }
        <Outlet/>
        </Fragment>
    )
}

export default ProfileById;