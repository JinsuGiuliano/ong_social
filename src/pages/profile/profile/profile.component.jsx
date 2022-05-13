import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostContainer, TopProfile, ProfileName, 
    ProfileEmail, CalendarIcon, JoinContainer,
    ProfilePhoto, ProfileInfoContainer} from './profile.styles';

import { selectAllPosts } from '../../../redux/posts/posts.selectors';
import { selectCurrentUser, selectIsFetching } from '../../../redux/user/user.selectors';

import Post from '../../../components/posts/post/post.component';
import CreatePost from '../../../components/posts/post/createPost.component';
import CustomButton from '../../../components/utils/custom-button/custom-button.component';
import EditProfile from '../edit/editProfile.component';
import SignInAndSignUpPage from '../../sign-in-and-sign-up/sign-in-and-sign-up.component';
import Spinner from '../../../components/utils/with-spinner/with-spinner.component';

const Profile =  () => {
    //const user = useSelector(selectCollection(category));
    const [edit, setEdit] = useState(false)
    const currentUser = useSelector(selectCurrentUser)
    const posts = useSelector(selectAllPosts)
    const isFetching = useSelector(selectIsFetching)
    //posts.sort((a,b) => b.createdAt -  a.createdAt )
    return(
        <PostContainer>
        
        {
            edit && 
            <EditProfile setEdit={setEdit} edit={edit}/>

        }
        <h2 style={{margin:'0px 4px', fontFamily:'Arial, Helvetica, sans-serif'}}>{currentUser.name}</h2>
        <TopProfile imageUrl={currentUser.photoBg? currentUser.photoBg : ''}>
            <ProfilePhoto imageUrl={currentUser.photo}/>
            <div style={{display:'flex',flexDirection:'column'}}>
                <ProfileName>{currentUser.name}</ProfileName>
                <ProfileEmail>{currentUser.email}</ProfileEmail>
                <JoinContainer>
                    <div><CalendarIcon color='white'/></div>
                    <div><ProfileEmail> Se unio {new Date(currentUser.createdAt.seconds*1000).toDateString()}</ProfileEmail></div>
                </JoinContainer>
            </div>
        </TopProfile>
        <ProfileInfoContainer>
            <div>
            <CustomButton isFollow  onClick={()=>setEdit(!edit)} style={{margin:'5px 0', padding:'5 5px' }}> EDITAR </CustomButton>
            </div>
        </ProfileInfoContainer>
        
        <CreatePost isFixed={false}/>
        {
            isFetching?
            <Spinner/>
            :
            <Fragment>
            {
                posts && currentUser &&
                posts
                    .filter(e => e.uid === currentUser.id)
                    .map( (p, idx) => (
                        <Post key={p.id + `${idx}`} data={p}/> 
                        ))
            }
            {
                !currentUser &&
                <SignInAndSignUpPage/>
            }
            </Fragment>

        }
        </PostContainer>
    )
}

export default Profile;