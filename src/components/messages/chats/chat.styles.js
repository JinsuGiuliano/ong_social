import styled from 'styled-components'
import { ReactComponent as ViewSVG  } from '../../../assets/icons/view.svg'


export const  ChatPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding: 5px;
    border-bottom: 1px solid #f5f4f1;

`
export const ChatListTitle = styled.span`
    font-size:70;
    font-weight:lighter; 
    color:#4285f4;
`
export const ChatsTopContainer = styled.div`
    position: fixed;
    width:100%;
    height:auto;
    background-color: #fff;
`
export const ChatsContainer = styled.div`
    padding: 30px 5px;
`



export const LastMessagePreview = styled.div`
    width: 50%;
    padding: 5px;
    border-bottom: 1px solid #f5f4f1;
`
export const LastMessageTextPreview = styled.span`
    font-family:sans-serif;
    font-weight:800;
    font-size:11px;
    color:gray;
`
export const LastMessageDatePreview = styled.span`
    font-family:sans-serif; 
    font-size:10px;
    color:grey;
`

export const ChatContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 15px 0px;
    width: 100%;
`
export const ChatTitle = styled.span`
    font-size: 25px;
`

export const ChatUserInfoContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: space-between;
` 

export const InfoTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
` 

export const PostUserIcon = styled.img`
    border-radius:30px;
    width: 35px;
    height: 35px;
`

export const ViewIcon = styled(ViewSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
        & path {
            fill: gray;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`