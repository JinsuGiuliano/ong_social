import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import FormInput from '../../utils/form-input/form-input.component';
import CustomButton from '../../utils/custom-button/custom-button.component';
import { withRouter } from '../../utils/Router/withRouter';
import {
  googleSignInStart,
  emailSignInStart
} from '../../../redux/user/user.actions';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
// import { useMoralis } from "react-moralis";
import { ConnectButton, Icon } from "web3uikit";

const SignIn = ({router}) =>  { 
  const dispatch = useDispatch();
  // const {Moralis, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const currentUser = useSelector(selectCurrentUser)
  // const [wallet, setWallet] = useState(currentUser)
  const googleSignIn =  () => dispatch(googleSignInStart())
 
  if(currentUser){
    router.navigate('/');
  }

  return(
      <SignInContainer>
        <SignInTitle> I already have an account... </SignInTitle>
          <ButtonsBarContainer>
            <CustomButton
              style={{borderRadius:'25px', margin:'5px 0px'}}
              type='button'
              onClick={() => googleSignIn()}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
      </SignInContainer>
    );
  }



export default withRouter(SignIn);
