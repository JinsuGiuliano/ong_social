import React from 'react'

import { CenterBarContainer, MenuLogoContainer, MenuTopContainer, 
    SearchBarContainer, MenuLogo, TendenciesLogo, MenuTitle } from './menuTop.styles';
import SearchBar from '../../searchBar/searchBar.components';
const MenuTop = () => {

    return(
        <MenuTopContainer>
            <MenuLogoContainer>
              <div>
                <MenuLogo />
              </div>
              <div>
                <MenuTitle>ONG SOCIAL</MenuTitle>
              </div>
            </MenuLogoContainer>
            <CenterBarContainer>
                <div><span style={{fontSize:'18px'}}> Inicio </span></div>
                <div> 
                    <TendenciesLogo />
                </div>
            </CenterBarContainer>
            <SearchBarContainer>
                <SearchBar searchBar />
            </SearchBarContainer>
        </MenuTopContainer>
    )
}

export default MenuTop;