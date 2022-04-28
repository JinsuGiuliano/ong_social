import React from 'react';
import {
  MainMenuContainer,
  MenuContainer,
  OptionContainer,
  OptionIcon,
  OptionText,
  MenuLogo
} from './LeftMenu.styles'
import CustomButton from '../utils/custom-button/custom-button.component';

const LeftMenu = () => {



    return(
        <MainMenuContainer>
        <MenuContainer>
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
            <OptionContainer>
                <CustomButton isPost onClick={()=>{return}} style={{width:'200px'}}> Post It! </CustomButton>
            </OptionContainer>
        </MenuContainer>
        </MainMenuContainer>
    )
}

export default LeftMenu;