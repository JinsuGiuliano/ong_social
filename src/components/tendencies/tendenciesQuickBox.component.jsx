import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectAllUsers, selectCurrentUser, selectFollowingUsers } from '../../redux/user/user.selectors';
import { fetchUserProfileStart, followStart, unfollowStart } from '../../redux/user/user.actions';

import { UserInfoChild } from '../posts/post/post.styles';
import CustomButton from '../utils/custom-button/custom-button.component';
import { UserNameContainer } from '../posts/post/post.styles';
import { BoxContainer,BoxFixedContainer, FollowContentContainer, 
    FollowUserInfoContainer, InfoTextContainer, PostUserIcon, FollowTitle } from './tendencies.styles';

const TendenciesQuickBox = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const currentUser = useSelector(selectCurrentUser)
    const following = useSelector(selectFollowingUsers)
    const FollowUser = (userId) =>{
        dispatch(followStart(userId))
    }
    const UnFollowUser = (userId) =>{
        dispatch(unfollowStart(userId))
    }
    return(
        <BoxContainer>
         <BoxFixedContainer>
            <FollowContentContainer>
                <FollowTitle>Other Users</FollowTitle>
            </FollowContentContainer>
            {
                users && 
                users
                     .map( (user, idx) => {
                        const { photo, name, email, id } = user;
                        return(
                            <FollowContentContainer key={idx} >
                                <FollowUserInfoContainer>
                                    <UserInfoChild>
                                        <PostUserIcon src={ `${photo? photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
                                    </UserInfoChild>  
                                </FollowUserInfoContainer>
                                <InfoTextContainer>
                                <UserInfoChild > 
                                    <UserNameContainer to={`profile/${id}`} onClick={()=> dispatch(fetchUserProfileStart(id))}><strong> { name.toUpperCase() } </strong></UserNameContainer>
                                    <p style={{fontSize:'10px',color:'gray',margin:'0px' }}>{ email} </p>
                                </UserInfoChild>
                                <UserInfoChild > 
                                {
                                    currentUser &&
                                    <CustomButton onClick={following && following.includes(user.id) ? ()=>UnFollowUser(id): ()=>FollowUser(id)} isUnFollow>{following && following.includes(user.id) ?'UNFOLLOW': 'FOLLOW'}  </CustomButton>

                                }
                                {
                                    !currentUser &&
                                    <CustomButton onClick={()=>{}} isUnFollow> KNOW </CustomButton>

                                }
                                </UserInfoChild>
                            </InfoTextContainer>  
                            </FollowContentContainer>
                        )
                })
                
            }
            </BoxFixedContainer>
        </BoxContainer>
    )
}

export default TendenciesQuickBox;