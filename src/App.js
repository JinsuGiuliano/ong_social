import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession, fetchUsersStart } from './redux/user/user.actions';
import Home from './pages/home/home.component';
import ErrorBoundary from './ErrorBoundary'
import { postFetchStart } from './redux/posts/posts.actions';

const App = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(checkUserSession());
        dispatch(postFetchStart());
        dispatch(fetchUsersStart());
    }
    ,[])

    return(
      <ErrorBoundary>
            <Home/>
      </ErrorBoundary>

    );
  }


export default App;
