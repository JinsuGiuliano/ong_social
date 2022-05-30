import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileStart, postSaveStart, postUnSaveStart } from "../../../redux/user/user.actions";
import { postLikeStart } from "../../../redux/posts/posts.actions";
import { selectCurrentUser, selectSavedPostsIds } from "../../../redux/user/user.selectors";
import { PostContainer, PostUserIcon, PostContentContainer, PostImage,
        PostUserInfoContainer, PostText , UserInfoChild, InfoTextContainer,
        PostActionsContainer ,HeartIcon, ClapIcon, ShareIcon, UserNameContainer, Counter } from './post.styles'
import { useLocation, useNavigate } from "react-router-dom";
import { doc, onSnapshot, query } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.utils";


const Post = ({data}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ post, setPost ] = useState({...data})
    const { caption, createdAt, creation, filePath, likesCount, photo, name, username, email, id, uid, retweetCount , isNGO} = post

    const savedPosts = useSelector(selectSavedPostsIds);
    const currentUser = useSelector(selectCurrentUser);
    const postSaved =  savedPosts? !savedPosts.includes(id) :false ;

    const queryPost = query(doc(firestore, "posts", uid, 'userPosts', id))


    const goToProfile = (uid) => {
        navigate(`profile/${uid}`,{replace: true});
      }
    
    const savePost = () => {
        dispatch(postSaveStart(data))
    }
    const unSavePost = () => {
        dispatch(postUnSaveStart(data))
    }
    const likePost = () => {
        dispatch(postLikeStart(id, uid))
    }


    useEffect( () => {
        const unsubscribe = onSnapshot(queryPost, (querySnapshot) => {
            const d = querySnapshot.data();
            setPost({...post, ...d});
        });
        return unsubscribe;
    },[])

    return(
    <PostContainer>   
    {   
        data && currentUser &&
        <PostContentContainer>
        <PostUserInfoContainer>    
            <UserInfoChild>
                <PostUserIcon src={ `${photo? photo :'http://www.fibeipes.com/static/images/default.jpg'}` } alt=''/>
            </UserInfoChild>   
            <InfoTextContainer>
                <UserInfoChild > 
                    <UserNameContainer onClick={()=> {dispatch(fetchUserProfileStart(uid)); goToProfile(uid)}} ><strong> { name.toUpperCase() } </strong></UserNameContainer>
                </UserInfoChild> 
                <UserInfoChild>
                    <p style={{fontSize:'12px',color:'gray', margin:'0' }}> { `@${username} ${isNGO? '#NGO':''}` } </p>
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
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    {
                        postSaved?
                        <Fragment>
                        <HeartIcon color={'gray' } onClick={()=> savePost()}/>
                        <Counter>{retweetCount === 0? '': retweetCount }</Counter>
                        </Fragment>
                        :
                        <Fragment>
                        <HeartIcon color={'red' } onClick={()=> unSavePost()}/>

                        <Counter>{retweetCount === 0? '': retweetCount }</Counter>
                        </Fragment>
                    }
                    </div>
                
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <ClapIcon color='#4285f4' onClick={()=>likePost()}/>
                        <Counter>{likesCount === 0? '': likesCount }</Counter>
                </div>
                <div><ShareIcon color='#75ae2b'/></div>
            </PostActionsContainer>
            <UserInfoChild>
            <p style={{fontSize:'11px',color:'#e1e0e0' }}> post created at { new Date(createdAt*1000).toDateString() } </p>
        </UserInfoChild> 
        </div>
    </PostContentContainer>

    } 


    {   
        data && !currentUser &&
        <PostContentContainer>
        <PostUserInfoContainer>    
            <UserInfoChild>
                <PostUserIcon src={ `${photo? photo:'http://www.fibeipes.com/static/images/default.jpg'}` } alt=''/>
            </UserInfoChild>   
            <InfoTextContainer>
                <UserInfoChild > 
                <UserNameContainer to={`profile/${uid}`} onClick={()=> {dispatch(fetchUserProfileStart(uid)); goToProfile(uid)}}><strong> { name.toUpperCase() } </strong></UserNameContainer>
                </UserInfoChild> 
                <UserInfoChild>
                    <p style={{fontSize:'12px',color:'gray' }}> { `${username} ${isNGO? '#NGO': ''}` } </p>
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
                    <ClapIcon color='#4285f4'/>
                    <Counter>{likesCount === 0? '': likesCount }</Counter>
                </div>
                <div><ShareIcon color='#75ae2b'/></div>
            </PostActionsContainer>
            <UserInfoChild>
            <p style={{fontSize:'11px',color:'#e1e0e0' }}> post created at { createdAt? new Date(createdAt*1000).toDateString() : new Date(creation*1000).toDateString() } </p>
        </UserInfoChild> 
        </div>
    </PostContentContainer>

    } 
    </PostContainer>
)}

export default Post;