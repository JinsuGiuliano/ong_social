import React, { Fragment, useState } from "react";


import PostTab from './postsTab.component';
import FollowTab from './followTab.component'
import { TabSelectorContainer, WraperImages, WraperFollowers, WraperFollowing, WraperPosts, ButtonContainer } from '../tabs.styles';
import ImagesTab from './imagesTab.component';
import CustomButton from '../../../../components/utils/custom-button/custom-button.component';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, selectFollowingUsers, selectIsFetching, selectProfilePageState } from "../../../../redux/user/user.selectors";
import { ActionsWithUser, MessageIcon, SendMessageButton, SendText, StarIcon } from "../profile.styles";
import { followStart, unfollowStart } from "../../../../redux/user/user.actions";

const UserTabs = ({ isProfileById, setNewMessage, newMessage}) => {


    const dispatch = useDispatch()
    const [postTab, setPostTab] = useState(true);
    const [followingTab, setFollowingTab] = useState(false);
    const [followersTab, setFollowersTab] = useState(false);
    const [imagesTab, serImagesTab] = useState(false);
    const profile = useSelector(selectProfilePageState);
    const isFetching = useSelector(selectIsFetching);
    const currentUser = useSelector(selectCurrentUser)
    const currentUserFollowing = useSelector(selectFollowingUsers)
    const {user, posts, following, followers, images, id} =  profile && profile;

    const FollowUser = () =>{
        dispatch(followStart(id))
    }
    const UnFollowUser = () =>{
        dispatch(unfollowStart(id))
    }
    return(
        <Fragment>
            <ActionsWithUser >
                <SendMessageButton onClick={()=>setNewMessage(!newMessage)}>
                    <SendText>ENVIAR MENSAJE</SendText>
                </SendMessageButton>
                <Fragment>
                {
                    currentUserFollowing.includes(id)?
                    <SendMessageButton onClick={()=> UnFollowUser()}>                    
                    <SendText>NO SEGUIR</SendText> 
                    </SendMessageButton>
                    :
                    <SendMessageButton  onClick={()=> FollowUser()}>
                        <StarIcon/> <SendText>SEGUIR</SendText> 
                    </SendMessageButton>
                }
                </Fragment>
            </ActionsWithUser>
            <TabSelectorContainer>
            <ButtonContainer>
            <CustomButton isProfileTab onClick={()=> {setPostTab(true); setFollowersTab(false); setFollowingTab(false); serImagesTab(false)}}>
                    POSTS
            </CustomButton>
            </ButtonContainer>
            <ButtonContainer>
            <CustomButton isProfileTab onClick={()=> {setPostTab(false); setFollowersTab(true); setFollowingTab(false); serImagesTab(false)}}>
                    FOLLOWERS
            </CustomButton>
            </ButtonContainer>
            <ButtonContainer>
            <CustomButton isProfileTab onClick={()=> {setPostTab(false); setFollowersTab(false); setFollowingTab(true); serImagesTab(false)}}>
                    FOLLOWING
            </CustomButton>
        </ButtonContainer>
        <ButtonContainer>
        <CustomButton isProfileTab onClick={()=> {setPostTab(false); setFollowersTab(false); setFollowingTab(false); serImagesTab(true)}}>
                IMAGES
        </CustomButton>
        </ButtonContainer>
       
        </TabSelectorContainer>
          
            <WraperPosts show={postTab}>
                <PostTab posts={posts} user={user}/>
            </WraperPosts>
            <WraperFollowing show={followingTab}>
                <FollowTab isProfileById={isProfileById} following={following}/>
            </WraperFollowing>
            <WraperFollowers show={followersTab}>
                <FollowTab isProfileById={isProfileById} followers={followers}/>
            </WraperFollowers>
            <WraperImages show={imagesTab}>
                <ImagesTab images={images}/>
            </WraperImages>
        </Fragment>
    )
}

export default UserTabs;