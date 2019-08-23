import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import netlifyIdentity from 'netlify-identity-widget';
import './index.css';
import { Provider } from 'react-redux';
import Main from './views/Main';
import Login from './views/Login';
import store from './store';

netlifyIdentity.init();

const App = () => {
  useEffect(() => {}, []);

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
