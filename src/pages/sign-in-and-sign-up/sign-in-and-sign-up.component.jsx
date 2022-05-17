import React, { useState } from 'react';

import SignIn from '../../components/signInUp/sign-in/sign-in.component';
import SignUp from '../../components/signInUp/sign-up/sign-up.component';
import CustomButton from '../../components/utils/custom-button/custom-button.component';

import { SignInAndSignUpContainer, TabSelectorContainer, FormWraperSignUp, FormWraperSignIn } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => {
const [singIn, setSignIn] = useState(true);
const [singUp, setSignUp] = useState(false);

return(  
  <SignInAndSignUpContainer>
    <TabSelectorContainer>
      <div>
        <CustomButton isPost onClick={()=> {setSignUp(!singUp); setSignIn(!singIn)}}>
              SignUp
        </CustomButton>
      </div>
      <div>
        <CustomButton isPost onClick={()=> {setSignUp(!singUp); setSignIn(!singIn)}}>
                SignIn
        </CustomButton>
      </div>
    </TabSelectorContainer>
      <FormWraperSignUp show={singUp}>
        <SignUp   />
      </FormWraperSignUp>
      <FormWraperSignIn  show={singIn}>
        <SignIn   />
      </FormWraperSignIn>
  </SignInAndSignUpContainer>)
}

export default SignInAndSignUpPage;
