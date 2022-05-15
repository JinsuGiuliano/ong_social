import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectCurrentUser, selectSavedPostsLength} from '../../redux/user/user.selectors'
import {
  MainMenuContainer,
  MenuContainer,
  MenuTitle,
  OptionContainer,
  OptionText,
  ProfileOptionContainer,
  PostOptionContainer,
  SavedCounterContainer,
  UserIcon, HeartIcon, HomeIcon, BellIcon, EnvelopeIcon, FixedContainer, MenuLogoContainer, MenuLogo
} from './LeftMenu.styles'
import SignIn from '../signInUp/sign-in/sign-in.component';
import SignUp from '../signInUp/sign-up/sign-up.component'
import CustomButton from '../utils/custom-button/custom-button.component';
import ProfileBar from './profile/profileBar.component';
import { useNavigate } from 'react-router-dom';
import { messageFetchStart } from '../../redux/messages/messages.actions';


const LeftMenu = () => {

   const dispatch = useDispatch();
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
        <FixedContainer currentUser={currentUser? true: false}>
        <MenuContainer>
                <MenuLogoContainer onClick={()=>navigate('/')}>
                    <div>
                        <MenuLogo />
                    </div>
                    <div>
                        <MenuTitle><strong>ONG </strong>SOCIAL</MenuTitle>
                    </div>
                </MenuLogoContainer>
            {
                currentUser ?                
                    <Fragment>
                <OptionContainer >
                    <BellIcon color={'black'}/>
                    <OptionText>Notificaciones</OptionText>
                </OptionContainer>
              
                    <OptionContainer onClick={()=>{navigate('/messages');dispatch(messageFetchStart())}} >
                        <EnvelopeIcon color={'black'}/>
                        <OptionText>Mensajes</OptionText>
                    </OptionContainer>
              
                <OptionContainer onClick={()=>navigate('/saved-posts')} >
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
             
                    <OptionContainer onClick={()=>navigate('/profile')} >
                            <UserIcon color={'black'}/>
                            <OptionText>Perfil</OptionText>
                     </OptionContainer>
                   
            </Fragment>
            : 
           <Fragment>
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
           </Fragment>
           }
        </MenuContainer>
            <ProfileOptionContainer >
                <ProfileBar setShowSignin={setShowSignin} showSignin={showSignin} setShowSignUp={setShowSignUp} showSignUp={showSignUp}/>
            </ProfileOptionContainer>
          </FixedContainer>
        </MainMenuContainer>
    )
}

export default LeftMenu;