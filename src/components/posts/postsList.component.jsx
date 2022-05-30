import React from 'react'
import {PostsListContainer} from './posts.styles'
import Post from './post/post.component';

const PostsList = ({posts}) => {

    posts.sort((a, b) => a.createdAt - b.createdAt)
    return(
        <PostsListContainer>
        {
            posts.map( (p, idx) => 
                    <Post key={idx} data={p}/> 
                 )
        }
        </PostsListContainer>
    )
}

export default PostsList;