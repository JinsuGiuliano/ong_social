import React from "react";
import { PostContainer, PostUserIcon, PostContentContainer,
        PostUserInfoContainer, PostText , UserInfoChild, InfoTextContainer } from './post.styles'

const Post = ({ data }) => {
    const { caption, createdAt, downloadURL, likesCount, photo, name, email } = data

    return(
    <PostContainer>   
    {   
        data &&
        <PostContentContainer>
        <PostUserInfoContainer>    
            <UserInfoChild>
                <PostUserIcon src={ `${photo? photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
            </UserInfoChild>   
            <InfoTextContainer>
                <UserInfoChild > 
                    <p style={{fontSize:'13px',color:'black' }}><strong> { name.toUpperCase() } </strong></p>
                </UserInfoChild> 
                <UserInfoChild>
                    <p style={{fontSize:'12px',color:'gray' }}> { email } </p>
                </UserInfoChild> 
                <UserInfoChild>
                    <p style={{fontSize:'12px',color:'gray' }}> { createdAt? new Date(createdAt.seconds*1000).toDateString() : '' } </p>
                </UserInfoChild> 
            </InfoTextContainer>     
        </PostUserInfoContainer>
        <PostText>{ caption }</PostText>
    </PostContentContainer>

    } 
    
    </PostContainer>
)}

export default Post;