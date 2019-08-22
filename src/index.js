/* eslint-disable no-underscore-dangle */

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import netlifyIdentity from 'netlify-identity-widget';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './views/Main';
import reducers from './reducers';
import Login from './views/Login';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

netlifyIdentity.init();

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Login path="/" />
        <Main path="/main" />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
