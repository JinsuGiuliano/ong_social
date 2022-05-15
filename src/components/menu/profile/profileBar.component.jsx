import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { useNavigate } from 'react-router-dom';

import { UserInfoChild } from '../../posts/post/post.styles'; 

import CustomButton from '../../utils/custom-button/custom-button.component';
import { BoxContainer, BoxFixedContainer, ProfileBarContainer,
         ProfileInfoContainer, InfoTextContainer, UserIcon } from './profileBar.styles';

import { signOutStart } from '../../../redux/user/user.actions';

const ProfileBar = ({setShowSignin, showSignin, setShowSignUp,showSignUp }) => {

    const dispatch = useDispatch()
    
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    const randomUser = 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png';

    const signout = () => {
        dispatch(signOutStart())
    }

    return(
        <BoxContainer>
        {
            currentUser?
            <ProfileBarContainer >
                <ProfileInfoContainer>
                    <UserInfoChild>
                        <UserIcon src={ currentUser.photo} alt=''/>
                    </UserInfoChild>  
                </ProfileInfoContainer>
                <InfoTextContainer>
                <UserInfoChild > 
                    <p style={{fontSize:'13px',color:'white',margin:'0px',fontWeight:'200' }}><strong> { currentUser.name.toUpperCase() } </strong></p>
                    <p style={{fontSize:'10px',color:'white',margin:'0px',fontWeight:'200' }}>{ currentUser.email} </p>
                </UserInfoChild>
                <UserInfoChild > 
                    <CustomButton isFollow onClick={()=>signout()}> signout </CustomButton>
                </UserInfoChild>
                </InfoTextContainer>  
            </ProfileBarContainer>
            :
            <ProfileBarContainer>
            
            <ProfileInfoContainer>
                <UserInfoChild>
                    <UserIcon src={randomUser} alt=''/>
                </UserInfoChild>  
            </ProfileInfoContainer>
            <InfoTextContainer>
            <UserInfoChild > 
                <p style={{fontSize:'13px',color:'black',margin:'0px' }} onClick={()=>{!showSignin?setShowSignUp(!showSignUp):setShowSignin(false)}}><strong> Create an Account</strong></p>
                <p style={{fontSize:'10px',color:'gray',margin:'0px' }}> Sign In  </p>
            </UserInfoChild>
            <UserInfoChild > 
                <CustomButton isFollow onClick={()=>{!showSignUp?setShowSignin(!showSignin):setShowSignUp(false)}}> SIGNIN </CustomButton>
            </UserInfoChild>
            </InfoTextContainer>  
        </ProfileBarContainer>
        }
       </BoxContainer>
    )
}

export default ProfileBar;