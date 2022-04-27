import React from 'react'

import { CenterBarContainer, MenuLogoContainer, MenuTopContainer, SearchBarContainer, MenuLogo } from './menuTop.styles';
import SearchBar from '../../searchBar/searchBar.components';
import LeftMenu from '../menu.component';
const MenuTop = () => {

    return(
        <MenuTopContainer>
            <MenuLogoContainer>
              <div>
                <MenuLogo src={'./ysp-logo.png'} alt=''/>
              </div>
            </MenuLogoContainer>
            <CenterBarContainer>
                <div><span style={{fontSize:'18px'}}> INICIO </span></div>
                <div><span style={{fontSize:'18px'}}> + </span></div>
            </CenterBarContainer>
            <SearchBarContainer>
                <SearchBar searchBar />
            </SearchBarContainer>
        </MenuTopContainer>
    )
}

export default MenuTop;