import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 50px auto;
  @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
    }
`;


export const TabSelectorContainer = styled.div`
  display: flex;
  height:50px;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  z-index:99999999999999;
`

export const FormWraperSignIn = styled.div`
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`

export const FormWraperSignUp = styled.div`
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`