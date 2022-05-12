import styled from 'styled-components'


export const ChatMessagesContainer = styled.div`
    display: flex;
    width: 50%;
    height:800px;
    flex-direction:column;
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