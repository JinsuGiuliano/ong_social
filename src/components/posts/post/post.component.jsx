import React from "react";
import { PostContainer, PostUserIcon, PostContentContainer,
        PostUserInfoContainer, PostText , UserInfoChild, InfoTextContainer } from './post.styles'

const Post = ({ data }) => {
    console.log('data: ', data)
    const { caption, creation, downloadURL, likesCount, photo, name, email } = data
    const nDate = new Date(creation.seconds*1000).toDateString()
    return(
    <PostContainer>    
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
                        <p style={{fontSize:'10px',color:'gray' }}> { email } </p>
                    </UserInfoChild> 
                    <UserInfoChild>
                        <p style={{fontSize:'10px',color:'gray' }}> { nDate } </p>
                    </UserInfoChild> 
                </InfoTextContainer>     
                            </PostUserInfoContainer>
            <PostText>{ caption }</PostText>
        </PostContentContainer>
    </PostContainer>
)}

export default Post;