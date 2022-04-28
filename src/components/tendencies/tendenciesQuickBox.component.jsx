import React from 'react'
import { useSelector } from 'react-redux';

import { selectAllUsers } from '../../redux/user/user.selectors';

import { UserInfoChild } from '../posts/post/post.styles';
import CustomButton from '../utils/custom-button/custom-button.component';
import { BoxContainer,BoxFixedContainer, FollowContentContainer, FollowUserInfoContainer, InfoTextContainer, PostUserIcon, FollowTitle } from './tendencies.styles';

const TendenciesQuickBox = () => {
    const users = useSelector(selectAllUsers)
    console.log('users: ', users)

    return(
        <BoxContainer>
         <BoxFixedContainer>
            <FollowContentContainer>
                <FollowTitle>Tendencies</FollowTitle>
            </FollowContentContainer>
            {
                users && 
                users
                     .filter((_, idx) => idx < 4)
                     .map( (user, idx) => {
                        const { photo, name, email } = user;
                        return(
                            <FollowContentContainer key={idx} >
                                <FollowUserInfoContainer>
                                    <UserInfoChild>
                                        <PostUserIcon src={ `${photo? photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
                                    </UserInfoChild>  
                                </FollowUserInfoContainer>
                                <InfoTextContainer>
                                <UserInfoChild > 
                                    <p style={{fontSize:'13px',color:'black',margin:'0px' }}><strong> { name.toUpperCase() } </strong></p>
                                    <p style={{fontSize:'10px',color:'gray',margin:'0px' }}>{ email} </p>
                                </UserInfoChild>
                                <UserInfoChild > 
                                    <CustomButton isFollow> FOLLOW </CustomButton>
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