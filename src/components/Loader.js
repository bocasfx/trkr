import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader">
    <div className="loader-text">Wait for it...</div>
    <div className="main-spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  </div>
);

export default Loader;
