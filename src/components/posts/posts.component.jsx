import React from 'react';
import { useSelector } from 'react-redux';
import { PostContainer } from './posts.styles';

import { selectAllPosts } from '../../redux/posts/posts.selectors';
import { selectCurrentUser, selectFollowingUsers } from '../../redux/user/user.selectors';

import Post from './post/post.component';
import CreatePost from './post/createPost.component';

const Posts =  () => {

    const currentUser = useSelector(selectCurrentUser)
    const posts = useSelector(selectAllPosts)
    const following = useSelector(selectFollowingUsers)
    console.log('following: ', following)
    posts.sort((a,b) => b.createdAt -  a.createdAt )
    return(
        <PostContainer>
        {
            currentUser && <CreatePost/> 
        }
       
        {
            posts && currentUser && 
            posts.filter(e => following.includes(e.uid))
                 .filter(e => currentUser? e.id !== currentUser.id: e.id !== null)
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
        </PostContainer>
    )
}

export default Posts;