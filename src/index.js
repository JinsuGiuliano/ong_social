import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <MoralisProvider serverUrl="https://0gvnrquynji0.usemoralis.com:2053/server" appId="F82fxsa5HvU7sABpJtu4tjLgeG3adNMUMAGkwa78">
          <App />
        </MoralisProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
