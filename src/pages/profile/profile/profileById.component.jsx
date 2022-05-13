import React, { Fragment, useState} from 'react';
import {  useSelector } from 'react-redux';
import { PostContainer, TopProfile, ProfileName, ProfileEmail, 
    CalendarIcon, JoinContainer,ProfilePhoto, SendMessageButton, MessageIcon,
    SendText } from './profile.styles';

import { selectIsFetching, selectProfilePageState } from '../../../redux/user/user.selectors';
import Spinner from '../../../components/utils/with-spinner/with-spinner.component';
import UserTabs from './tabs/userTabs.components';
import NewMessageForm from '../../../components/messages/newMessage/newMessage.component';

const ProfileById =  () => {

    const [ newMessage, setNewMessage] = useState(false)
    const profile = useSelector(selectProfilePageState);
    const isFetching = useSelector(selectIsFetching);
    const { user, id } =  profile && profile;
    console.log('profile: ', profile)
    return(
        <Fragment>
        {
            isFetching ?
            <Spinner/>
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
                    <h2 style={{margin:'0px 4px', fontFamily:'Arial, Helvetica, sans-serif'}}>{user.name}</h2>
                    <TopProfile imageUrl={user.photoBg}>
                        <ProfilePhoto imageUrl={user.photo}/>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <ProfileName>{user.name}</ProfileName>
                            <ProfileEmail>{user.email}</ProfileEmail>
                            <JoinContainer>
                                <div><CalendarIcon color='white'/></div>
                            </JoinContainer>
                            <SendMessageButton onClick={()=>setNewMessage(!newMessage)}>
                                <SendText>ENVIAR MENSAJE</SendText>
                                <MessageIcon/>
                            </SendMessageButton>
                        </div>
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