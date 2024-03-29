import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import storeRoot from './Redux_features/Containers/storeRoot';

storeRoot.subscribe(() => {
  //console.log(storeRoot.gestate());   // get provider values 
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-0yz4j5k7uppqtjdw.us.auth0.com"
  clientId="1YxWKtbidaBtOZC1OQhGvlIHNNkL8iS3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={storeRoot}>
      <App />
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
