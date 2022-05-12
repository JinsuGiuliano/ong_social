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
                <MenuTitle><strong>ONG </strong>SOCIAL</MenuTitle>
              </div>
            </MenuLogoContainer>
            <CenterBarContainer>
                <div> 
                    <TendenciesLogo />
                </div>
            </CenterBarContainer>
        </MenuTopContainer>
    )
}

export default MenuTop;