import React from 'react'

import { CenterBarContainer, MenuLogoContainer, MenuTopContainer, SearchBarContainer, MenuLogo, TendenciesLogo } from './menuTop.styles';
import SearchBar from '../../searchBar/searchBar.components';
const MenuTop = () => {

    return(
        <MenuTopContainer>
            <MenuLogoContainer>
              <div>
                <MenuLogo src={'./ysp-logo.png'} alt=''/>
              </div>
            </MenuLogoContainer>
            <CenterBarContainer>
                <div><span style={{fontSize:'18px'}}> Inicio </span></div>
                <div> 
                    <TendenciesLogo src={'./icons/stars.png'} alt='tendencias hoy'/>
                </div>
            </CenterBarContainer>
            <SearchBarContainer>
                <SearchBar searchBar />
            </SearchBarContainer>
        </MenuTopContainer>
    )
}

export default MenuTop;