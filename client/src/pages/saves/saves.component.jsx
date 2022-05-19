import React from 'react'
import { useSelector } from 'react-redux';
import Post from '../../components/posts/post/post.component';
import { selectAllPosts } from '../../redux/posts/posts.selectors';
import { selectSavedPosts } from '../../redux/user/user.selectors';
import { PostContainer } from '../profile/profile.styles';
const SavedPosts = () => {
    const savedList = useSelector(selectSavedPosts) 
    return(
        <PostContainer>
        {
            savedList.length ?
            savedList.map( (p, idx )=> {
                console.log('saved post: ', p)
                return(
                   <Post key={idx} data={p}/> 
                )})
                :
                <h3> There are no Saved Posts </h3>
        }
        </PostContainer>
    )
}

export default SavedPosts;