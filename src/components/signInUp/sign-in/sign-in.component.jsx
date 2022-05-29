import React, { Fragment, useEffect, useState } from 'react';
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
import { selectCurrentUser, selectIsFetching } from '../../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
// import { useMoralis } from "react-moralis";
import { ConnectButton, Icon } from "web3uikit";

import Loader from '../../utils/loader/loader.component'

const SignIn = ({router}) =>  { 
  const dispatch = useDispatch();
  // const {Moralis, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const currentUser = useSelector(selectCurrentUser)
  const isFetching = useSelector(selectIsFetching)
  // const [wallet, setWallet] = useState(currentUser)
  const googleSignIn =  () => {dispatch(googleSignInStart()); router.navigate('/')}
 


  return(
    <Fragment>
{
  isFetching ?

    <Loader/>
  :
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
      }
    </Fragment>
    );
  }



export default withRouter(SignIn);
