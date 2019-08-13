import React from 'react';
import ReactDOM from 'react-dom';
import ListList from './components/ListList';
import './index.css';
import Calendar from './components/Calendar';

const App = () => (
  <>
    <ListList />
    <Calendar />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
