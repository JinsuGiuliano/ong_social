import React, { useState } from 'react'
// import algoliasearch from 'algoliasearch/lite';
// import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { SearchBarContainer } from './searchBar.styles';
import FormInput from '../utils/form-input/form-input.component';

const SearchBar = () => {
    const [query, setQuery] =  useState('')

    const handleChange = event => { 
        const { value } = event.target;
        setQuery(value)
      

    };

    return(
        
        <SearchBarContainer>
                <FormInput
                type='text'
                name='displayName'
                label='Search on users, projects or posts...'
                value={query}
                onChange={handleChange}
                required
                searchBar
                />
        </SearchBarContainer>
    )
}

export default SearchBar;