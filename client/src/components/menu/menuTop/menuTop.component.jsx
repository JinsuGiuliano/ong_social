import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectChatMessages } from '../../../redux/messages/messages.selectors';
import ChatPreview from '../../messages/chats/chatPreview.component';

import { CenterBarContainer, MenuLogoContainer, 
         MenuTopContainer, MenuLogo, 
         TendenciesLogo, MenuTitle } from './menuTop.styles';

const MenuTop = () => {
    return(
        <MenuTopContainer>
            <MenuLogoContainer>
              <div>
                <MenuLogo />
              </div>
              <div>
                <MenuTitle><strong>ONG </strong>SOCIAL</MenuTitle>
              </div>
            </MenuLogoContainer>
        </MenuTopContainer>
    )
}

export default MenuTop;