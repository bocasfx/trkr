import React from 'react';
import { useAuth0 } from './login-wrapper';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button type="button" onClick={() => loginWithRedirect({})}>
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button type="button" onClick={() => logout()}>
          Log out
        </button>
      )}
    </div>
  );
};

export default NavBar;
