import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectCurrentUser, selectSavedPostsLength} from '../../../redux/user/user.selectors'
import {
  MainMenuContainer,
  MenuContainer,
  OptionContainer,
  OptionText,
  SavedCounterContainer, OptionsListContainer,
  UserIcon, HeartIcon, HomeIcon, BellIcon, EnvelopeIcon
} from './mobileMenu.styles'

import { useNavigate } from 'react-router-dom';
import { messageFetchStart } from '../../../redux/messages/messages.actions';


const MobileMenu = () => {

    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const currentUser = useSelector(selectCurrentUser)

    const savedPostsLength = useSelector(selectSavedPostsLength) 

    return(
        <MainMenuContainer>
        <MenuContainer>
            <OptionsListContainer>
                <OptionContainer onClick={()=>navigate('/')}>
                    <HomeIcon color={'black'}/>
                    <OptionText>Inicio</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <BellIcon color={'black'}/>
                    <OptionText>Notificaciones</OptionText>
                </OptionContainer>
                <OptionContainer onClick={()=>{navigate('/messages');dispatch(messageFetchStart())}}>
                    <EnvelopeIcon color={'black'} />
                    <OptionText>Mensajes</OptionText>
                </OptionContainer>
                <OptionContainer onClick={()=>navigate('/saved-posts')} currentUser={currentUser? true : false}>
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
            {
                currentUser ?
                <OptionContainer onClick={()=>navigate('/profile')}>
                    <UserIcon color={'black'}/>
                    <OptionText>Perfil</OptionText>
                </OptionContainer>
                :
                <OptionContainer onClick={()=>navigate('/signin')}>
                    <UserIcon color={'black'}/>
                    <OptionText>SignIn</OptionText>
                </OptionContainer>
            }

            </OptionsListContainer>
        </MenuContainer>

        </MainMenuContainer>
    )
}

export default MobileMenu;