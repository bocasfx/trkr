/* eslint-disable no-underscore-dangle */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, navigate } from '@reach/router';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './views/Main';
import reducers from './reducers';
import { Auth0Provider } from './utils/Auth0Provider';
import Login from './views/Login';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const onRedirectCallback = () => {
  navigate('/main');
};

const App = () => (
  <Provider store={store}>
    <Auth0Provider
      domain="trkr.auth0.com"
      client_id="vs4HAin8dv1HGYa8H7idyTLKvSsX01NO"
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router>
        <Login path="/" />
        <Main path="/main" />
      </Router>
    </Auth0Provider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
