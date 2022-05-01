import styled from 'styled-components';

export const SignInContainer = styled.div`
  background-color: #fff;
  border-radius:25%;
  padding: 0 10px;
  width:20%;
  display: flex;
  flex-direction: column;
  z-index:99999;
  position: fixed;
  top: 200;
  right:200;
`;

export const SignInTitle = styled.h2`
  margin: 5px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;
