import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchUserProfileStart } from '../../../redux/user/user.actions';
import { UserInfoChild, UserNameContainer } from '../../posts/post/post.styles';
import { ViewIcon, LastMessagePreview, LastMessageTextPreview, LastMessageDatePreview } from './chat.styles';
import { ChatContentContainer, ChatUserInfoContainer, InfoTextContainer, PostUserIcon,  } from './chat.styles';

const ChatPreview = ({chat, id, onView}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const goToProfile = () => {
        navigate(`profile/${chat.to.id}`,{replace: true});
      }
    
    const goToChat = () => {
    navigate(id,{replace: true});
    }

    const lastMessage = chat.messages.slice(-1)[0] 
    console.log('lastMessage: ', lastMessage)
    return(
          <ChatContentContainer  >
                <ChatUserInfoContainer>
                    <UserInfoChild>
                        <PostUserIcon src={ `${chat.to.photo? chat.to.photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
                    </UserInfoChild>  
                </ChatUserInfoContainer>
                <InfoTextContainer>
                <UserInfoChild > 
                    <UserNameContainer  onClick={()=> {dispatch(fetchUserProfileStart(chat.to.id)); goToProfile()}}>
                        <strong> { chat.to.name.toUpperCase() } </strong>
                    </UserNameContainer>
                    <p style={{fontSize:'10px',color:'gray',margin:'0px' }}>{ chat.to.email} </p>
                </UserInfoChild>
            
              {
                !onView &&  
                <Fragment>
                    <LastMessagePreview>
                        <LastMessageDatePreview>{ new Date(lastMessage.createdAt.seconds*1000).toDateString() + ': '}</LastMessageDatePreview><LastMessageTextPreview >{lastMessage.text.length > 20? lastMessage.text.slice(0,20) + ' ...': lastMessage.text}</LastMessageTextPreview>
                    </LastMessagePreview>
                    <div>
                        <ViewIcon onClick={() => goToChat()}/>
                    </div>
                </Fragment>
              }
            </InfoTextContainer>  
          
            
             </ChatContentContainer>

    )
}

export default ChatPreview;

