import styled from 'styled-components';
import { ReactComponent as YspSVG  } from '../../../assets/icons/ysp-logo.svg'
import { ReactComponent as StarSVG  } from '../../../assets/icons/stars.svg'

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
    

export const MenuLogo = styled(YspSVG)`
    width: 50px;
    height: 50px;
    cursor:pointer;
    & path {
            fill: #4285f4;
        }
    &:hover{
        & path {
            fill: ${({color}) => color };
        }
    }
`;

export const MenuTitle = styled.span`
font-size:100px,;
font-weight:lighter; 
color:#4285f4;
`


export const TendenciesLogo = styled(StarSVG)`
    width: 30px;
    height: 30px;
    cursor:pointer;
    & path {
            fill: #ffda00;
        }
    &:hover{
        & path {
            fill: ${({color}) => color };
        }
    }
`;
