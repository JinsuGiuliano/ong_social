import styled from 'styled-components'

export const AlertContainer = styled.div`
    width: auto;
    height:auto;
    background-image: -webkit-linear-gradient(67deg,rgba(66,133,244,0.9), rgba(72,66,244,0.9) );
    position:fixed;
    color: #fff;
    font-weight:500;
    font-size:15px;
    bottom:0;
    margin-bottom: 60px;
    z-index:99999999999999999999;
    border-radius:5px;
    padding:10px;
    text-align: center;
    cursor:pointer;

    &:hover{
        box-shadow: 0px 0px 10px #4285f4; 
    }
`