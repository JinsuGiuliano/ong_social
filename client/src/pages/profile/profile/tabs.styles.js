import styled from 'styled-components'


export const TabSelectorContainer = styled.div`
  display: flex;
  height:50px;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  z-index:99999999999;
`
export const ButtonContainer = styled.div`
    width:100%;
    height:auto;
`

export const WraperPosts = styled.div`
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`

export const WraperFollowing = styled.div`
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`

export const WraperFollowers = styled.div`
  width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`

export const WraperImages = styled.div`
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
   @media only screen and (max-width: 700px){
        width:100%;
        flex-direction:column;
        justify-content:space-between;
        display: ${({ show }) => show? 'flex' : 'none'};
    }
`