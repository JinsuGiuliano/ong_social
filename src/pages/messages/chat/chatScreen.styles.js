import styled  from 'styled-components';



export const ChatMessagesContainer = styled.div`
    display: flex;
    width: 50%;
    height:800px;
    flex-direction:column;
    background-image: -webkit-linear-gradient(67deg,#b042f4, #4842f4, #2C1393 );
    @media only screen and (max-width: 900px){
        width:100%;
        height:800px;
    }
`

export const MessagesList = styled.div`
    display: flex;
    flex-direction:column;
    overflow-y: auto;
    margin-top: 70px;
`

export const ChatInfo = styled.div`
    width: 50%;
    background-color: #fff;
    position:fixed;
    @media only screen and (max-width: 900px){
        width:100%;
    }

`

export const SendMessageContainer = styled.div`
    width: 50%;
    background-color: #fff;
    position:fixed;
    bottom:0;
    @media only screen and (max-width: 900px){
        width:100%;
        bottom: none;
    }

`