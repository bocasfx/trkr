import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader__blanket">
    <div className="loader__text">Wait for it...</div>
    <div className="loader__main-spinner">
      <div className="loader__double-bounce1" />
      <div className="loader__double-bounce2" />
    </div>
  </div>
);

export default Loader;
