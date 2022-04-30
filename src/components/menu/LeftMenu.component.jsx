import React from 'react';
import {
  MainMenuContainer,
  MenuContainer,
  OptionContainer,
  OptionIcon,
  OptionText,
  ProfileOptionContainer,
  PostOptionContainer
} from './LeftMenu.styles'
import CustomButton from '../utils/custom-button/custom-button.component';
import ProfileBar from './profile/profileBar.component';
const LeftMenu = () => {



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
                    <OptionText>Guardados</OptionText>
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