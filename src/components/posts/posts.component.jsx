import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { PostContainer } from './posts.styles';

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
            currentUser && <CreatePost/> 
        }
    
    {
            isFetching?
            <Spinner/>
            :
            <Fragment>
                {
                    posts && currentUser && 
                    posts.filter(e => following && following.includes(e.uid))
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
            </Fragment>
        }          

        </PostContainer>
    )
}

export default Posts;