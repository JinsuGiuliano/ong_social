import styled  from 'styled-components';



export const ChatMessagesContainer = styled.div`
    display: flex;
    width: 50%;
    height:800px;
    flex-direction:column;
    background-image: -webkit-linear-gradient(92deg,#d9d2e9, #ead1dc, #f4cccc);
    @media only screen and (max-width: 900px){
        width:100%;
        height:100%;
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