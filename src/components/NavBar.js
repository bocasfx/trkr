import React from 'react';
import { useAuth0 } from '../utils/Auth0Provider';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const onClick = () => (isAuthenticated ? logout() : loginWithRedirect({}));
  const label = isAuthenticated ? 'Log out' : 'Log in';
  return (
    <div>
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default NavBar;
