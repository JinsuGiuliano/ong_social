import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';


  const Spinner = ({ isLoading, ...otherProps }) => {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) 
  };

export default Spinner;
