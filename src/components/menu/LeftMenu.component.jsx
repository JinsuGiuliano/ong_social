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
  SavedCounterContainer
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
                    <OptionIcon imageUrl={'./icons/home.png'}/>
                    <OptionText>Inicio</OptionText>

                </OptionContainer>
                <OptionContainer>
                    <OptionIcon imageUrl={'./icons/bell.png'}/>
                    <OptionText>Notificaciones</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionIcon imageUrl={'./icons/envelope.png'}/>
                    <OptionText>Mensajes</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionIcon imageUrl={'./icons/heart.png'}/>
                    <OptionText>Guardados </OptionText>
                    {
                        savedPostsLength?
                        <SavedCounterContainer>
                            <span style={{color:'white', fontSize:'12px'}}> {savedPostsLength}  </span>
                        </SavedCounterContainer>
                        : '' 
                    }
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