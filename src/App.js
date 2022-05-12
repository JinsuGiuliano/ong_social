import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession, fetchFollowStart, fetchUsersStart } from './redux/user/user.actions';
import Home from './pages/home/home.component';
import { GlobalStyle } from './globalStyles';
import ErrorBoundary from './ErrorBoundary'
import { postFetchStart } from './redux/posts/posts.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { messageFetchStart } from './redux/messages/messages.actions';
// import { addCollectionAndDocuments } from './firebase/firebase.utils';
// import SHOP_DATA from './redux/shop/shop.data';
const App = () => {

    const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(checkUserSession());
        dispatch(postFetchStart());
        dispatch(fetchUsersStart());
        dispatch(fetchFollowStart());
    },[])

    return(
      <ErrorBoundary>
            <Home/>
      </ErrorBoundary>

    );
  }


export default App;
