import styled from 'styled-components'

export const BoxContainer = styled.div`
    width: 100%;
    padding: 0 10px;

`
export const BoxFixedContainer = styled.div`
    position:fixed;
    width: 100%;
`

export const ProfileBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 15px 0px;
`
export const ProfileTitle = styled.span`
    font-size: 25px;
`

export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: space-between;

    @media only screen and (max-width: 700px){
        display:none;
    }
` 

export const signInProfileContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: space-between;
` 

export const InfoTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: space-between;
    
    @media only screen and (max-width: 700px){
        display:none;
    }
` 

export const UserIcon = styled.img`
    border-radius:30px;
    width: 35px;
    height: 35px;
`
