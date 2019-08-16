/* eslint-disable no-underscore-dangle */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './screens/login';
import Main from './screens/main';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Login path="/" />
      <Main path="main" />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
