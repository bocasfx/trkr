import React from 'react';
import { useAuth0 } from '../utils/Auth0Provider';
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const onClick = () => (isAuthenticated ? logout() : loginWithRedirect({}));
  const label = isAuthenticated ? 'Log out' : 'Log in';
  return (
    <div className="navbar-container">
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default NavBar;
