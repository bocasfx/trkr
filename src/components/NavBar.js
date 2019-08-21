import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

import './NavBar.css';

const NavBar = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  const handleIdentity = (e) => {
    e.preventDefault();
    netlifyIdentity.open();
  };

  return (
    <div className="navbar-container">
      <button type="button" onClick={handleIdentity}>
        Login
      </button>
    </div>
  );
};

export default NavBar;
