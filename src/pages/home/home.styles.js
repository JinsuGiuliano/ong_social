import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height:100%;
    @media only screen and (max-width: 700px){
        flex-direction: column;
    }
`
export const HomeMainContainer = styled.div`
    width:100%;
    height:100%;
    @media only screen and (max-width: 700px){
        flex-direction: column;
        width:100%;
    }
`

export const HomeCenterContainer = styled.div`
    width:50%;
    height:100%;
    @media only screen and (max-width: 700px){
        flex-direction: column;
        width:100%;
    }
`