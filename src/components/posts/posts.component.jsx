import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dot, LoadingWrapper, PostContainer, PostsListContainer, SeeNewest, SeeNewestContainer } from './posts.styles';

import { selectAllPosts, selectIsFetching, selectIsFetchingNewest } from '../../redux/posts/posts.selectors';
import { selectCurrentUser, selectFollowingUsers } from '../../redux/user/user.selectors';

import Post from './post/post.component';
import CreatePost from './post/createPost.component';
import Spinner from '../utils/with-spinner/with-spinner.component'
import { postFetchNewestStart } from '../../redux/posts/posts.actions';
const Posts =  () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const posts = useSelector(selectAllPosts)
    const following = useSelector(selectFollowingUsers)
    const isFetching = useSelector(selectIsFetching)
    const isFetchingNewest = useSelector(selectIsFetchingNewest)
    posts.sort((x,y) => {
        let a = x.createdAt
        let b = y.createdAt
       return(b-a)
    } )
    
    const RefreshNewestPosts = () => {
        console.log(posts.slice(-1)[0].createdAt)
        dispatch(postFetchNewestStart(posts.slice(-1).createdAt))
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
            <PostsListContainer>
                {
                    currentUser && posts && 
                        posts.map( (p, idx) => (
                            <Post key={p.id + idx} data={p}/> 
                            ))
                }
                {
                    !currentUser && posts &&  
                        posts.map( (p, idx) => (
                                <Post key={p.id + idx} data={p}/> 
                                ))
                }
            </PostsListContainer>
           
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
        </SeeNewestContainer>
        </PostContainer>
    )
}

export default Posts;