import React from 'react';
import { useSelector } from 'react-redux';
import { PostContainer } from './posts.styles';

import { selectAllPosts } from '../../redux/posts/posts.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Post from './post/post.component';
import CreatePost from './post/createPost.component';
const Posts =  () => {
    const currentUser = useSelector(selectCurrentUser)
    const posts = useSelector(selectAllPosts)

    return(
        <PostContainer>
        <CreatePost/>
        {
            posts && 
            posts.filter(e => currentUser? e.id !== currentUser.id: e.id !== null)
                 .map( p => (<Post key={p.id} data={p}/> ))
        }
        </PostContainer>
    )
}

export default Posts;