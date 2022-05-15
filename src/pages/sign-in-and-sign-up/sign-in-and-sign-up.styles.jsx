import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
    }
`;


export const TabSelectorContainer = styled.div`
  display: flex;
  height:100%;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  z-index:99999999999999;
`

export const FormWraperSignIn = styled.div`
        width:100%;
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`

export const FormWraperSignUp = styled.div`
          width:100%;
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`