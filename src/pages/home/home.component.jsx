import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { postFetchStart } from '../../redux/posts/posts.actions';

import Menu from '../../components/menu/menu.component';
import Posts from '../../components/posts/posts.component';
import MenuTop from '../../components/menu/menuTop/menuTop.component';
import { HomeContainer } from './home.styles';
const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(postFetchStart())
    },[])

    return(
        <div >
            <MenuTop/>
            <HomeContainer>
                <Menu/>
                <Posts/>
            </HomeContainer>
        </div>
    )
}

export default Home;