import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { postFetchStart } from '../../redux/posts/posts.actions';
import { fetchUsersStart , fetchFollowStart} from '../../redux/user/user.actions';

import SavedPosts from '../saves/saves.component';
import LeftMenu from '../../components/menu/LeftMenu.component';
import Posts from '../../components/posts/posts.component';
import MenuTop from '../../components/menu/menuTop/menuTop.component';
import { HomeContainer } from './home.styles';
import TendenciesQuickBox from '../../components/tendencies/tendenciesQuickBox.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Profile from '../profile/profile.component';


const Home = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    useEffect(()=>{
        dispatch(postFetchStart())
        dispatch(fetchUsersStart())
        dispatch(fetchFollowStart())
    },[currentUser])

    return(
        <div >
            <MenuTop/>
            <HomeContainer>
                <LeftMenu/>
                <Routes>
                    <Route path='/' element={<Posts/>}/>
                    <Route path='profile' element={<Profile />} />
                    <Route path='saved-posts' element={<SavedPosts/>}/>
                </Routes>
                <TendenciesQuickBox/>
            </HomeContainer>
        </div>
    )
}

export default Home;