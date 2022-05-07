import React from 'react'
import { useSelector } from 'react-redux';
import Post from '../../components/posts/post/post.component';
import { selectAllPosts } from '../../redux/posts/posts.selectors';
import { selectSavedPosts } from '../../redux/user/user.selectors';
import { PostContainer } from '../profile/profile.styles';
const SavedPosts = () => {
    const savedList = useSelector(selectSavedPosts) 
    const posts = useSelector(selectAllPosts)
    const list = savedList && posts.filter(e => savedList.includes(e.id))
    console.log('list: ~~~~~', list)
    return(
        <PostContainer>
        {
            list.length ?
            list.map( p => (
                   <Post key={p.id} data={p}/> 
                ))
                :
                <h3> There are no Saved Posts </h3>
        }
        </PostContainer>
    )
}

export default SavedPosts;