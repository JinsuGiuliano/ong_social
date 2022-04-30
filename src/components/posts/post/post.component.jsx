import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSaveStart, postUnSaveStart } from "../../../redux/user/user.actions";
import { postLikeStart, postDisLikeStart } from "../../../redux/posts/posts.actions";
import { selectSavedPosts } from "../../../redux/user/user.selectors";
import { PostContainer, PostUserIcon, PostContentContainer,
        PostUserInfoContainer, PostText , UserInfoChild, InfoTextContainer,PostActionsContainer ,HeartIcon, ClapIcon, ShareIcon } from './post.styles'

const Post = ({ data }) => {

    const dispatch = useDispatch()

    const { caption, createdAt, creation, downloadURL, likesCount, photo, name, email, id, uid } = data
    const savedPosts = useSelector(selectSavedPosts)
    const postSaved = !savedPosts.includes(id)

    const savePost = () => {
        dispatch(postSaveStart(id))
    }
    const unSavePost = () => {
        dispatch(postUnSaveStart(id))
    }
    const likePost = () => {
        dispatch(postLikeStart(id, uid))
    }
    const dislikePost = () => {
        dispatch(postDisLikeStart(id))
    }
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
                    <p style={{fontSize:'12px',color:'gray' }}> { createdAt? new Date(createdAt.seconds*1000).toDateString() : new Date(creation.seconds*1000).toDateString() } </p>
                </UserInfoChild> 
            </InfoTextContainer>     
        </PostUserInfoContainer>
        <PostText>{ caption }</PostText>
        <PostActionsContainer>
                <div>
                {
                    postSaved?
                    <HeartIcon color={'gray' } onClick={()=> savePost()}/>
                    :
                    <HeartIcon color={'red' } onClick={()=> unSavePost()}/>
                }
                </div>
            
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div><ClapIcon color='#4285f4' onClick={()=>likePost()}/></div>
                <div><span style={{fontSize:'10px',color:'gray', position:'absolute', top:'3'}}>{likesCount === 0? '': likesCount }</span></div>
            </div>
            <div><ShareIcon color='#75ae2b'/></div>
        </PostActionsContainer>
    </PostContentContainer>

    } 
    
    </PostContainer>
)}

export default Post;