import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { postFetchStart } from '../../redux/posts/posts.actions';
import { fetchUsersStart } from '../../redux/user/user.actions';

import LeftMenu from '../../components/menu/LeftMenu.component';
import Posts from '../../components/posts/posts.component';
import MenuTop from '../../components/menu/menuTop/menuTop.component';
import { HomeContainer } from './home.styles';
import TendenciesQuickBox from '../../components/tendencies/tendenciesQuickBox.component';
const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(postFetchStart())
        dispatch(fetchUsersStart())
    },[])

    return(
        <div >
            <MenuTop/>
            <HomeContainer>
                <LeftMenu/>
                <Posts/>
                <TendenciesQuickBox/>
            </HomeContainer>
        </div>
    )
}

export default Home;