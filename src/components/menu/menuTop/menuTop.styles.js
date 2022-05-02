import styled from 'styled-components';

export const MenuTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    height: 60px;
    width: 100%;
    top:0;
    z-index:9999999;
    background-color: #fff;
    padding: 10 10px;
    @media only screen and (max-width: 700px){
        display: none;
    }

`;

export const MenuLogoContainer = styled.div`
    width: 23%;
    height: 50px;
    top:0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 5px;

    @media only screen and (max-width: 700px){
        width: 15%;
        justify-content: center;
    }
`;


export const CenterBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top:0;
    height:50px;
    background-color: #fff;
    width: 50%;
    padding: 5px 5px;

    @media only screen and (max-width: 700px){
        display: none;
    }
`;

export const SearchBarContainer =  styled.div`
    display: flex;
    width: 25%;

    @media only screen and (max-width: 700px){
        display:none;
    }
`;
    

export const MenuLogo = styled.img`
    width: 50px;
    height: 50px;
    cursor:pointer;
`;

export const TendenciesLogo = styled.img`
    width: 30px;
    height: 30px;
    cursor:pointer;

    &:hover{
        width: 33px;
        height: 33px; 
    }
`;