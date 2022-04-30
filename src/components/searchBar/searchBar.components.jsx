import React from 'react'

import { SearchBarContainer } from './searchBar.styles';
import FormInput from '../utils/form-input/form-input.component';
const SearchBar = () => {

    const handleChange = () => { };

    return(
        <SearchBarContainer>
                <FormInput
                type='text'
                name='displayName'
                label='Search on App'
                value={''}
                onChange={handleChange}
                required
                searchBar
                />
        </SearchBarContainer>
    )
}

export default SearchBar;