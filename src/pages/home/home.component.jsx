import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { postFetchStart } from '../../redux/posts/posts.actions';
import { fetchUsersStart , fetchFollowStart} from '../../redux/user/user.actions';

import SavedPosts from '../saves/saves.component';
import LeftMenu from '../../components/menu/LeftMenu.component';
import Posts from '../../components/posts/posts.component';
import MenuTop from '../../components/menu/menuTop/menuTop.component';
import { HomeContainer, HomeMainContainer } from './home.styles';
import TendenciesQuickBox from '../../components/tendencies/tendenciesQuickBox.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Profile from '../profile/profile.component';
import MobileMenu from '../../components/menu/mobile/mobileMenu.component';
import SignInAndSignUpPage from '../sign-in-and-sign-up/sign-in-and-sign-up.component';


const Home = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    useEffect(()=>{
        dispatch(postFetchStart());
        dispatch(fetchUsersStart());
        dispatch(fetchFollowStart());
    },[currentUser])

    return(
        <HomeMainContainer >
            <MenuTop/>
           <MobileMenu/>

            <HomeContainer>
                <LeftMenu/>
                <Routes>
                    <Route path='/' element={<Posts/>}/>
                    <Route path='profile' element={<Profile />} />
                    <Route path='saved-posts' element={<SavedPosts/>}/>
                    <Route path='signin' element={<SignInAndSignUpPage/>}/>
                </Routes>
                <TendenciesQuickBox/>
            </HomeContainer>
        </HomeMainContainer>
    )
}

export default Home;