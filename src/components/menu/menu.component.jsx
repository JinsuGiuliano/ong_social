import React from 'react';
import {
  MainMenuContainer,
  MenuContainer,
  OptionContainer,
  OptionIcon,
  OptionText,
  MenuLogo
} from './menu.styles'



const Menu = () => {

    return(
        <MainMenuContainer>
        <MenuContainer>
            <OptionContainer>
                <MenuLogo src={'./ysp-logo.png'} alt=''/>
            </OptionContainer>
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
        </MenuContainer>
        </MainMenuContainer>
    )
}

export default Menu;