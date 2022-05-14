import React, { Fragment, useState } from "react";


import PostTab from './postsTab.component';
import FollowTab from './followTab.component'
import { TabSelectorContainer, WraperImages, WraperFollowers, WraperFollowing, WraperPosts, ButtonContainer } from '../tabs.styles';
import ImagesTab from './imagesTab.component';
import CustomButton from '../../../../components/utils/custom-button/custom-button.component';
import { useSelector } from "react-redux";
import { selectIsFetching, selectProfilePageState } from "../../../../redux/user/user.selectors";

const UserTabs = ({currentUser, isProfileById}) => {



    const [postTab, setPostTab] = useState(true);
    const [followingTab, setFollowingTab] = useState(false);
    const [followersTab, setFollowersTab] = useState(false);
    const [imagesTab, serImagesTab] = useState(false);

    const profile = useSelector(selectProfilePageState);
    const isFetching = useSelector(selectIsFetching);
    const {user, posts, following, followers, images} =  profile && profile;
    return(
        <Fragment>
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