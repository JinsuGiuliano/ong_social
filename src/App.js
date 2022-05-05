import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { checkUserSession } from './redux/user/user.actions';
import Home from './pages/home/home.component';
import { GlobalStyle } from './globalStyles';
import ErrorBoundary from './ErrorBoundary'

// import { addCollectionAndDocuments } from './firebase/firebase.utils';
// import SHOP_DATA from './redux/shop/shop.data';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  });
    return(
      <ErrorBoundary>
            <Home/>
      </ErrorBoundary>

    );
  }


export default App;
