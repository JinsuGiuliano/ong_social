import styled from 'styled-components';

export const SignUpContainer = styled.div`
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
        flex-direction: column;
        z-index:99999;
        position: relative;
        top:none;
        right:none;
    }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
