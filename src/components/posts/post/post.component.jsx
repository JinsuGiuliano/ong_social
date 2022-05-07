import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileStart, postSaveStart, postUnSaveStart } from "../../../redux/user/user.actions";
import { postLikeStart } from "../../../redux/posts/posts.actions";
import { selectCurrentUser, selectSavedPosts } from "../../../redux/user/user.selectors";
import { PostContainer, PostUserIcon, PostContentContainer, PostImage,
        PostUserInfoContainer, PostText , UserInfoChild, InfoTextContainer,
        PostActionsContainer ,HeartIcon, ClapIcon, ShareIcon, UserNameContainer } from './post.styles'
import { useLocation, useNavigate } from "react-router-dom";

const Post = ({data}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location: ', location)
    const { caption, createdAt, creation, filePath, likesCount, photo, name, email, id, uid } = data
    const savedPosts = useSelector(selectSavedPosts);
    const currentUser = useSelector(selectCurrentUser);
    const postSaved =  savedPosts? !savedPosts.includes(id) :false ;

    const goToProfile = () => {
        navigate(`profile/${uid}`,{replace: true});
      }
    
    const savePost = () => {
        dispatch(postSaveStart(id))
    }
    const unSavePost = () => {
        dispatch(postUnSaveStart(id))
    }
    const likePost = () => {
        dispatch(postLikeStart(id, uid))
    }

    return(
    <PostContainer>   
    {   
        data && currentUser &&
        <PostContentContainer>
        <PostUserInfoContainer>    
            <UserInfoChild>
                <PostUserIcon src={ `${photo? photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
            </UserInfoChild>   
            <InfoTextContainer>
                <UserInfoChild > 
                    <UserNameContainer onClick={()=> {dispatch(fetchUserProfileStart(uid)); goToProfile()}} ><strong> { name.toUpperCase() } </strong></UserNameContainer>
                </UserInfoChild> 
                <UserInfoChild>
                    <p style={{fontSize:'12px',color:'gray' }}> { email } </p>
                </UserInfoChild> 
               
            </InfoTextContainer>     
        </PostUserInfoContainer>
        <div style={{display:'flex',flexDirection:'column', padding:'10px'}}>
            <PostText>{ caption }</PostText>
            
                {
                    filePath?
                    <PostImage imageUrl={filePath}/>
                    : null
                }
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
            <UserInfoChild>
            <p style={{fontSize:'11px',color:'#e1e0e0' }}> post created at { createdAt? new Date(createdAt.seconds*1000).toDateString() : new Date(creation.seconds*1000).toDateString() } </p>
        </UserInfoChild> 
        </div>
    </PostContentContainer>

    } 


    {   
        data && !currentUser &&
        <PostContentContainer>
        <PostUserInfoContainer>    
            <UserInfoChild>
                <PostUserIcon src={ `${photo? photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
            </UserInfoChild>   
            <InfoTextContainer>
                <UserInfoChild > 
                <UserNameContainer to={`profile/${uid}`} onClick={()=> dispatch(fetchUserProfileStart(uid))}><strong> { name.toUpperCase() } </strong></UserNameContainer>
                </UserInfoChild> 
                <UserInfoChild>
                    <p style={{fontSize:'12px',color:'gray' }}> { email } </p>
                </UserInfoChild> 
               
            </InfoTextContainer>     
        </PostUserInfoContainer>
        <div style={{display:'flex',flexDirection:'column', padding:'10px'}}>
            <PostText>{ caption }</PostText>
            
                {
                    filePath?
                    <PostImage imageUrl={filePath}/>
                    : null
                }
            <PostActionsContainer>
                    <div>
                    {
                        postSaved && currentUser &&
                        <HeartIcon color={postSaved? 'red': 'gray'} />
                    }
                    </div>
                
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div><ClapIcon color='#4285f4'/></div>
                    <div><span style={{fontSize:'10px',color:'gray', position:'absolute', top:'3'}}>{likesCount === 0? '': likesCount }</span></div>
                </div>
                <div><ShareIcon color='#75ae2b'/></div>
            </PostActionsContainer>
            <UserInfoChild>
            <p style={{fontSize:'11px',color:'#e1e0e0' }}> post created at { createdAt? new Date(createdAt.seconds*1000).toDateString() : new Date(creation.seconds*1000).toDateString() } </p>
        </UserInfoChild> 
        </div>
    </PostContentContainer>

    } 
    </PostContainer>
)}

export default Post;