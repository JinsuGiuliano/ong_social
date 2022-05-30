import React, { Fragment, useEffect, useState } from 'react';
import { AlertContainer } from './alert.style';
import {resetMessage} from '../../../redux/posts/posts.actions'
import { useDispatch } from 'react-redux';
const Alert = ({ children }) => {
  // the alert is displayed by default
  const [alert, setAlert] = useState(true);
const dispatch = useDispatch()

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
      dispatch(resetMessage())
    }, 5000);
  }, []);     
   
  return (
      <Fragment>
    {
        alert && 
        <AlertContainer>{children}</AlertContainer>
    }
    </Fragment>
  )
}

export default Alert;