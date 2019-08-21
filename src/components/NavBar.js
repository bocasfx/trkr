import React from 'react';
import axios from 'axios';
import './NavBar.css';

const NavBar = () => {
  const onClick = () => {
    axios.get('/.netlify/functions/auth').then((response) => {
      console.log(response);
    });
  }
  return (
    <div className="navbar-container">
      <button type="button" onClick={onClick}>
        Login
      </button>
    </div>
  );
};

export default NavBar;
