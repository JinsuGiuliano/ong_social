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
    box-shadow: 1px 1px 5px 1px grey;
`;

export const MenuLogoContainer = styled.div`
    width: 25%;
    height: 50px;
    top:0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 5px;
    
`;


export const CenterBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top:0;
    background-color: #fff;
    height:auto;
    width: 50%;
    padding: 5px 20px 0px 0px;
    z-index:9999;
`;

export const SearchBarContainer =  styled.div`
    width: 25%;
`;
    

export const MenuLogo = styled.img`
    width: 50px;
    height: 50px;
    margin: 60px 0px;
`;