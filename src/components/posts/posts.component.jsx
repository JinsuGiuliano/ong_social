import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { PostContainer, PostsListContainer } from './posts.styles';

import { selectAllPosts, selectIsFetching } from '../../redux/posts/posts.selectors';
import { selectCurrentUser, selectFollowingUsers } from '../../redux/user/user.selectors';

import Post from './post/post.component';
import CreatePost from './post/createPost.component';
import Spinner from '../utils/with-spinner/with-spinner.component'
const Posts =  () => {

    const currentUser = useSelector(selectCurrentUser)
    const posts = useSelector(selectAllPosts)
    const following = useSelector(selectFollowingUsers)
    const isFetching = useSelector(selectIsFetching)
    posts && posts.sort((a,b) => b.createdAt -  a.createdAt )
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
                    posts && 
                    posts.filter(e => following && following.includes(e.uid))
                        .map( (p, idx) => (
                            <Post key={p.id + idx} data={p}/> 
                            ))
                }
                {
                    posts &&  !currentUser &&
                    posts.map( (p, idx) => (
                            <Post key={p.id + idx} data={p}/> 
                            ))
                }
            </PostsListContainer>
        }          

        </PostContainer>
    )
}

export default Posts;