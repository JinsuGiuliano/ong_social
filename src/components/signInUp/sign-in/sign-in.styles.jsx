import styled from 'styled-components';

export const SignInContainer = styled.div`
  background-color: #fff;
  padding: 0 10px;
  width:20%;
  display: flex;
  flex-direction: column;
  z-index:99999;
  position: fixed;
  top: 200;
  right:200;
  @media only screen and (max-width: 700px){
        width:100%;
        display: flex;
        flex-direction: column;
        z-index:99999;
        position: relative;
    }
`;

export const SignInTitle = styled.h2`
  margin: 5px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;
