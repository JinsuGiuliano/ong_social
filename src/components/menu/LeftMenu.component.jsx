import React from 'react';
import { useSelector } from 'react-redux';
import {selectSavedPosts, selectSavedPostsLength} from '../../redux/user/user.selectors'
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
import CustomButton from '../utils/custom-button/custom-button.component';
import ProfileBar from './profile/profileBar.component';
const LeftMenu = () => {
    const savedPosts = useSelector(selectSavedPosts)
    const savedPostsLength = useSelector(selectSavedPostsLength) 


    return(
        <MainMenuContainer>
        <MenuContainer>
            <div>
                <OptionContainer>
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
                <OptionContainer>
                    <HeartIcon color={'black'}/>
                    <OptionText>Guardados </OptionText>
                    {
                        savedPostsLength?
                        <SavedCounterContainer>
                            <span style={{color:'white', fontSize:'12px'}}> {savedPostsLength}  </span>
                        </SavedCounterContainer>
                        : '' 
                    }
                </OptionContainer>
                <OptionContainer>
                    <UserIcon color={'black'}/>
                    <OptionText>Perfil</OptionText>
                </OptionContainer>
            </div>
            <PostOptionContainer  style={{margin:'30px'}}>
                <CustomButton isPost onClick={()=>{return}} style={{width:'200px', float:'center'}}> Post It! </CustomButton>
            </PostOptionContainer>
            <ProfileOptionContainer style={{marginTop:'200px'}}>
                <ProfileBar/>
            </ProfileOptionContainer>
        </MenuContainer>
        </MainMenuContainer>
    )
}

export default LeftMenu;