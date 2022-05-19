import React from 'react';

import { RightMenuContainer } from './menuRight.style';
import TendenciesQuickBox from '../../tendencies/tendenciesQuickBox.component';
import SearchBar from '../../searchBar/searchBar.components';

const MenuRight = () => {

    return(
        <RightMenuContainer>
        <SearchBar/>
        <TendenciesQuickBox/>
        </RightMenuContainer>
    )
}

export default MenuRight;