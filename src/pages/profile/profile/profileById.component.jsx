import React, { Fragment } from 'react';
import {  useSelector } from 'react-redux';
import { PostContainer, TopProfile, ProfileName, ProfileEmail, CalendarIcon, JoinContainer,ProfilePhoto } from './profile.styles';

import { selectProfilePageState } from '../../../redux/user/user.selectors';
import Post from '../../../components/posts/post/post.component';
import CreatePost from '../../../components/posts/post/createPost.component';

const ProfileById =  () => {
    const profile = useSelector(selectProfilePageState);
    
    const {user, posts} =  profile;

  
    return(
        
        <Fragment>
            <PostContainer>
            {
                user &&
                <Fragment>
                <h2 style={{margin:'0px 4px', fontFamily:'Arial, Helvetica, sans-serif'}}>{user.name}</h2>
                <TopProfile imageUrl={user.photoBg}>
                    <ProfilePhoto imageUrl={user.photo}/>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <ProfileName>{user.name}</ProfileName>
                        <ProfileEmail>{user.email}</ProfileEmail>
                        <JoinContainer>
                            <div><CalendarIcon color='white'/></div>
                        </JoinContainer>
                    </div>
                </TopProfile>
                </Fragment>
            }
        
            <CreatePost/>
            {
                posts &&
                posts
                    .filter(e => e.uid === user.id)
                    .map( (p, idx) => (
                        <Post key={p.id + `${idx}`} data={p}/> 
                        ))
            }

        </PostContainer>
   
        </Fragment>
    )
}

export default ProfileById;