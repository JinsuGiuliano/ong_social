import React, { Fragment, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dot, LoadingWrapper, PostContainer, PostsListContainer, SeeNewest, SeeNewestContainer } from './posts.styles';

import { selectAllPosts, selectInfoMessage, selectIsFetching, selectIsFetchingNewest } from '../../redux/posts/posts.selectors';
import { selectCurrentUser, selectFollowingUsers } from '../../redux/user/user.selectors';

import Post from './post/post.component';
import CreatePost from './post/createPost.component';
import Spinner from '../utils/with-spinner/with-spinner.component'
import { postFetchNewestStart, postFetchStart } from '../../redux/posts/posts.actions';
import Alert from '../utils/alert/alert.component';
import PostsList from './postsList.component';
const Posts =  () => {
    
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const posts = useSelector(selectAllPosts)
    const info = useSelector(selectInfoMessage)
    const following = useSelector(selectFollowingUsers)
    const isFetching = useSelector(selectIsFetching)
    const isFetchingNewest = useSelector(selectIsFetchingNewest)
//posts.at(0).createdAt
    const RefreshNewestPosts = async() => {
       dispatch(postFetchStart())
    }
      
    return(
        <PostContainer>

        {
            currentUser && <CreatePost isFixed/> 
        }
    
    {
            isFetching?
            <Spinner/>
            :
            posts && <PostsList posts={posts}/>
           
        }  
       
        <SeeNewestContainer>   
       
        {    
            isFetchingNewest?
            <SeeNewest isLoading onClick={()=> RefreshNewestPosts()}>
            see latest ...
            </SeeNewest>
            :
            <SeeNewest onClick={()=> RefreshNewestPosts()}> 
                see latest
            </SeeNewest>
        }
        {
            info && <Alert> {info}</Alert>
        } 
        </SeeNewestContainer>
        
        </PostContainer>
    )
}

export default Posts;