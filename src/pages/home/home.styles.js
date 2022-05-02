import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;

    @media only screen and (max-width: 700px){
        flex-direction: column;
    }
`
export const HomeMainContainer = styled.div`
    @media only screen and (max-width: 700px){
        flex-direction: column;
        width:100%;
    }
`