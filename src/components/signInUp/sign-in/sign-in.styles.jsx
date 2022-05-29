import styled from 'styled-components';
import { keyframes, css } from 'styled-components';

export const SignInContainer = styled.div`
  padding:10px;
  margin: 50px 0px;
  width:20%;
  display: flex;
  flex-direction: column;
  z-index:99999;
  position: fixed;
  color:#fff;
  @media only screen and (max-width: 700px){
        width:100%;
        display: flex;
        flex-direction: column;
        z-index:99999;
        position: relative;
    }
`;

export const SignInTitle = styled.span`
  margin: 5px 0;
  font-size: 30px;
  font-weight: 100;
  color:#fff;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding: 10px 0px;
  justify-content: space-between;
`;


