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
import ProfilePage from '../profile/profilePage.component';
import MobileMenu from '../../components/menu/mobile/mobileMenu.component';
import SignInAndSignUpPage from '../sign-in-and-sign-up/sign-in-and-sign-up.component';
import MenuRight from '../../components/menu/menuRight/menuRight.component';
import { selectAllUsers } from '../../redux/user/user.selectors';
import MessagesPage from '../messages/messagesPage.component';

const Home = () => {


    return(
        <HomeMainContainer >
            <MenuTop/>
           <MobileMenu/>
            <HomeContainer>
                <LeftMenu/>
                <Routes>
                    <Route path='/' element={<Posts/>}/>
                    <Route path='profile/*' element={<ProfilePage/>} />
                    <Route path='saved-posts' element={<SavedPosts/>}/>
                    <Route path='signin' element={<SignInAndSignUpPage/>}/>
                    <Route path='messages' element={<MessagesPage/>}/>

                </Routes>
                <MenuRight/>
            </HomeContainer>
        </HomeMainContainer>
    )
}

export default Home;