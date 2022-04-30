import React from 'react'

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { useNavigate } from 'react-router-dom';


import { UserInfoChild } from '../../posts/post/post.styles'; 
import CustomButton from '../../utils/custom-button/custom-button.component';
import { BoxContainer, BoxFixedContainer, ProfileBarContainer,
         ProfileInfoContainer, InfoTextContainer, UserIcon } from './profileBar.styles';

const ProfileBar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    const randomUser = 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png';
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
                    <p style={{fontSize:'13px',color:'black',margin:'0px' }}><strong> { currentUser.name.toUpperCase() } </strong></p>
                    <p style={{fontSize:'10px',color:'gray',margin:'0px' }}>{ currentUser.email} </p>
                </UserInfoChild>
                <UserInfoChild > 
                    <CustomButton isFollow> Editar </CustomButton>
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
                <p style={{fontSize:'13px',color:'black',margin:'0px' }}><strong> Create an Account</strong></p>
                <p style={{fontSize:'10px',color:'gray',margin:'0px' }}> Sign In  </p>
            </UserInfoChild>
            <UserInfoChild > 
                <CustomButton isFollow onClick={()=>navigate('/signin')}> SIGN UP </CustomButton>
            </UserInfoChild>
            </InfoTextContainer>  
        </ProfileBarContainer>
        }
       </BoxContainer>
    )
}

export default ProfileBar;