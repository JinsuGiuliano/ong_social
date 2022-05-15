import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostContainer, TopProfile, ProfileName, 
    ProfileEmail, CalendarIcon, JoinContainer,
    ProfilePhoto, ProfileInfoContainer, UserProfileInfoContainer} from './profile.styles';

import { selectAllPosts } from '../../../redux/posts/posts.selectors';
import { selectCurrentUser, selectIsFetching, selectUserPosts } from '../../../redux/user/user.selectors';

import Post from '../../../components/posts/post/post.component';
import CreatePost from '../../../components/posts/post/createPost.component';
import CustomButton from '../../../components/utils/custom-button/custom-button.component';
import EditProfile from '../edit/editProfile.component';
import SignInAndSignUpPage from '../../sign-in-and-sign-up/sign-in-and-sign-up.component';
import Spinner from '../../../components/utils/with-spinner/with-spinner.component';
import { fetchUserPostsAsync } from '../../../redux/user/user.sagas';
import { fetchUserPostsStart, signOutStart } from '../../../redux/user/user.actions';

const Profile =  () => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const currentUser = useSelector(selectCurrentUser)
    const posts = useSelector(selectUserPosts)
    const isFetching = useSelector(selectIsFetching)
    
    const signout = () => {
        dispatch(signOutStart())
    }
    
    useEffect(()=>{
        dispatch(fetchUserPostsStart())
    },[currentUser])
    return(
        <PostContainer>
        
        {
            edit && 
            <EditProfile setEdit={setEdit} edit={edit}/>

        }
        <TopProfile imageUrl={currentUser.photoBg? currentUser.photoBg : ''}>
            <ProfilePhoto imageUrl={currentUser.photo}/>
            <UserProfileInfoContainer>
                <ProfileName>{currentUser.name.toUpperCase()}</ProfileName>
                <ProfileEmail>{currentUser.email}</ProfileEmail>
                <JoinContainer>
                    <div><CalendarIcon color='white'/></div>
                    <div><ProfileEmail> </ProfileEmail></div>
                </JoinContainer>
            </UserProfileInfoContainer>
        </TopProfile>
        <ProfileInfoContainer>
            <div>
                <CustomButton isFollow onClick={()=>signout()} style={{margin:'5px 5px', padding:'5 5px', backgroundColor:'#d9534f' }}> signout </CustomButton> 
            </div>
            <div>
                <CustomButton isFollow  onClick={()=>setEdit(!edit)} style={{margin:'5px  5px', padding:'5 5px' }}> EDITAR </CustomButton>
            </div>
        </ProfileInfoContainer>

        <CreatePost isFixed={false}/>
        
        {
            isFetching?
            <Spinner/>
            :
            <Fragment>
            {
                posts && 
                posts.map( (p, idx) => (
                        <Post key={p.id + `${idx}`} data={{...p, ...currentUser}}/> 
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