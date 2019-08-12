import React from 'react';
import ReactDOM from 'react-dom';
import ListList from './components/ListList';
import './index.css';
import Calendar from './components/Calendar';

const onClick = () => {
  fetch('/.netlify/functions/lists-read/1', {
    method: 'POST',
  }).then(() => {
    console.log('Function replied!');
  });
};

const App = () => (
  <>
    <ListList />
    <Calendar />
    <button type="button" onClick={onClick} />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
