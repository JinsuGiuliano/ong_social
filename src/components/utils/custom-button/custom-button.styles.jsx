import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  font-size: 13px;
  border:none;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const isPostStyles = css`
  background-color: #4285f4;
  color: white;
  padding: 0 20px 0 20px;
  font-size: 12px;
  min-width: 80px;
  border: none;
  border-radius: 25px;
  float: right;
  &:hover {
    background-color: #357ae8;
  }
`;


const isUnFollowStyles = css`
  background-color: #000;
  color: white;
  padding: 0 2px 0 2px;
  font-size: 10px;
  min-width: 70px;
  height: 30px;
  border: none;
  border-radius: 25px;
  float: right;
  &:hover {
    background-color: gray;
  }
`;

const isFollowStyles = css`
  background-color: #4285f4;
  color: white;
  padding: 0 2px 0 2px;
  font-size: 10px;
  min-width: 70px;
  height: 30px;
  border: none;
  border-radius: 25px;
  float: right;
  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  if(props.isPost){
    return isPostStyles;
  }
  if(props.isFollow){
    return isFollowStyles
  }
  if(props.isUnFollow){
    return isUnFollowStyles
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 30px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}
`;
