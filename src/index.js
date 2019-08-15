import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import './index.css';
import Login from './screens/login';
import Main from './screens/main';

const App = () => (
  <Router>
    <Login path="/" />
    <Main path="main" />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
