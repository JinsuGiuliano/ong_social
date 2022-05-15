import styled, { css } from 'styled-components';

import {backgroundColor, textColor} from '../../../redux/theme/styles.const';




export const GroupContainer = styled.div`
  position: relative;
  margin:  0px;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

const postInputStyle = css`
  width: 400px;
  padding: 0px 5px 0px 5px;
  margin: 5px 0px;
  font-size: 13px;
  background-color:#f7f7f7;
  height: 40px;
  border-radius: 15px;
  @media only screen and (max-width: 700px){
    width:250px;
    font-size: 12px;
    padding: 2px 2px 2px 2px;
    background-color:#fff;
}
`

const siginInputStyle = css`
  height:25px;
  font-size:13px;
  @media only screen and (max-width: 700px){
    width:100%;
}
`


const searchBarShrinkLabelStyles = css`
  top: -10px;
  font-size: 8px;
  color: #ddd;
`;

const searchInputStyle = css`
  margin:0px;
  font-size: 12px;
  font-weight:200;
  background-color:#fff;
  height: 20px;
  border-bottom:1px solid gray;
  color: #ddd;
  &.shrink {
    ${searchBarShrinkLabelStyles}
  }

  &:focus ~ label {
    ${searchBarShrinkLabelStyles}
  }
`

const getInputStyles = props => {
  if (props.isPost) {
    return postInputStyle;
  }
  if(props.searchBar){
    return searchInputStyle;
  }
  if(props.isSignin){
    return siginInputStyle;
  }
  return;
};

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: ${backgroundColor};
  color: gray;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: none;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  ${getInputStyles}

`;

export const FormInputLabel = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }

  ${getInputStyles}

`;
