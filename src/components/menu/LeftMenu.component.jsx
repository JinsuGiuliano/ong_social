import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {selectCurrentUser, selectFormsState, selectSavedPosts, selectSavedPostsLength} from '../../redux/user/user.selectors'
import {
  MainMenuContainer,
  MenuContainer,
  OptionContainer,
  OptionIcon,
  OptionText,
  ProfileOptionContainer,
  PostOptionContainer,
  SavedCounterContainer,
  UserIcon, HeartIcon, HomeIcon, BellIcon, EnvelopeIcon
} from './LeftMenu.styles'
import SignIn from '../signInUp/sign-in/sign-in.component';
import SignUp from '../signInUp/sign-up/sign-up.component'
import CustomButton from '../utils/custom-button/custom-button.component';
import ProfileBar from './profile/profileBar.component';
import { useNavigate } from 'react-router-dom';


const LeftMenu = () => {

   
    const navigate = useNavigate()
    const currentUser = useSelector(selectCurrentUser)

    const [ showSignin, setShowSignin ] = useState(false)
    const [ showSignUp, setShowSignUp ] = useState(false)

    useEffect(()=>{
        setShowSignin(false);
        setShowSignUp(false);
    },[currentUser])

    const savedPostsLength = useSelector(selectSavedPostsLength) 

    return(
        <MainMenuContainer>
        <MenuContainer>
            <div>
                <OptionContainer onClick={()=>navigate('/')}>
                    <HomeIcon color={'black'}/>
                    <OptionText>Inicio</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <BellIcon color={'black'}/>
                    <OptionText>Notificaciones</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <EnvelopeIcon color={'black'}/>
                    <OptionText>Mensajes</OptionText>
                </OptionContainer>
                <OptionContainer onClick={()=>navigate('/saved-posts')}>
                    <HeartIcon color={'black'} />
                    <OptionText>Guardados </OptionText>
                    {
                        savedPostsLength?
                        <SavedCounterContainer>
                            <span style={{color:'white', fontSize:'12px'}}> {savedPostsLength}  </span>
                        </SavedCounterContainer>
                        : '' 
                    }
                </OptionContainer>
                <OptionContainer onClick={()=>navigate('/profile')}>
                    <UserIcon color={'black'}/>
                    <OptionText>Perfil</OptionText>
                </OptionContainer>
            </div>
            <PostOptionContainer  style={{margin:'30px'}} onClick={()=>{return}}>
                <CustomButton isPost  style={{width:'200px', float:'center'}}> Post It! </CustomButton>
            </PostOptionContainer>
            <ProfileOptionContainer style={{marginTop:'150px'}}>
                <ProfileBar setShowSignin={setShowSignin} showSignin={showSignin} setShowSignUp={setShowSignUp} showSignUp={showSignUp}/>
            </ProfileOptionContainer>
        </MenuContainer>

          { 
            showSignin  ?
              <SignIn/>
              :
              null
          }
          { 
            showSignUp  ?
              <SignUp/>
              :
              null
          }
        </MainMenuContainer>
    )
}

export default LeftMenu;