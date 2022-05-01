import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';
import Home from './pages/home/home.component';
import { GlobalStyle } from './globalStyles';

// import { addCollectionAndDocuments } from './firebase/firebase.utils';
// import SHOP_DATA from './redux/shop/shop.data';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  });
    return(
        <Home/>
    );
  }


export default App;
