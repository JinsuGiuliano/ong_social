import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectAllUsers, selectCurrentUser, selectFollowingUsers, selectIsFetching } from '../../../../redux/user/user.selectors';
import { fetchUserProfileStart, followStart, unfollowStart } from '../../../../redux/user/user.actions';

import { UserInfoChild } from '../../../../components/posts/post/post.styles';
import CustomButton from '../../../../components/utils/custom-button/custom-button.component';
import { UserNameContainer } from '../../../../components/posts/post/post.styles';
import { BoxContainer,BoxFixedContainer, FollowContentContainer, 
    FollowUserInfoContainer, InfoTextContainer, PostUserIcon, FollowTitle } from '../../../../components/tendencies/tendencies.styles';
import Spinner from '../../../../components/utils/with-spinner/with-spinner.component';

const FollowTab = ({following, followers, isProfileById}) => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const currentUser = useSelector(selectCurrentUser)
    const isFetching = useSelector(selectIsFetching)
    const FollowUser = (userId) =>{
        dispatch(followStart(userId))
    }
    const UnFollowUser = (userId) =>{
        dispatch(unfollowStart(userId))
    }
    return(
            <Fragment>
            {
                isFetching?
                <Spinner/>
                :
                <Fragment>
                {
                    users &&
                    users.filter( u => following? following.includes(u.id): followers.includes(u.id))
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
                                        !isProfileById && (
                                            !following ?
                                            <CustomButton onClick={() => FollowUser(id)} isUnFollow> FOLLOW </CustomButton>
                                            :
                                            <CustomButton onClick={() => UnFollowUser(id)} isUnFollow> UNFOLLOW  </CustomButton>
                                        )

                                    }
                                    {
                                        isProfileById &&
                                        <CustomButton onClick={()=>{}} isUnFollow> KNOW </CustomButton>

                                    }
                                    </UserInfoChild>
                                </InfoTextContainer>  
                                </FollowContentContainer>
                            )
                    })
                    
                }
                </Fragment>
            }
            </Fragment>
    )
}

export default FollowTab;