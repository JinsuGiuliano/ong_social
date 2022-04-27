import styled, { css } from 'styled-components';

import {backgroundColor, textColor} from '../../../redux/theme/styles.const';


const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${textColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

const postInputStyle = css`
  width: 400px;
`
const searchInputStyle = css`
  
`

const getInputStyles = props => {
  if (props.isPost) {
    return postInputStyle;
  }
  if(props.searchBar){
    return searchInputStyle;
  }
  return;
};


export const FormInputContainer = styled.input`
  background: none;
  background-color: ${backgroundColor};
  color: ${textColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${textColor};
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
  color: ${textColor};
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
`;
