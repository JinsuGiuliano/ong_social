import styled from 'styled-components';


export const PostContainer = styled.div`
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction:row;
    margin: 20px 0px;
`

export const PostUserIcon = styled.img`
    border-radius:30px;
    width: 50px;
    height: 50px;
`

export const PostContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: normal;
`

export const PostUserInfoContainer = styled.div`
    width: 600px;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-start;
    align-items: center;
` 
export const InfoTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: baseline;
    justify-content: flex-start;
` 


export const PostText = styled.span`
    color: #000;
    margin-left: 50px;
    font-size: 14px;
`


export const CreatePostContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserInfoChild  = styled.div`
    margin-right: 4px; 
`