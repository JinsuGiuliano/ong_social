import React from 'react';
import { connect, useSelector } from 'react-redux';

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


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

  }

 
  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart, currentUser, router } = this.props;
    if(currentUser){
      router.navigate('/');
    }
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span >Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            isSignin
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            isSignin
            required
          />
          <ButtonsBarContainer>
            <CustomButton style={{borderRadius:'25px', margin:'5px 0px'}}  type='submit'> Sign in </CustomButton>
            <CustomButton
             style={{borderRadius:'25px', margin:'5px 0px'}}
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn));
