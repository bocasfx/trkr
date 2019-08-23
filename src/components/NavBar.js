import React, { useEffect, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';

import './NavBar.css';

netlifyIdentity.on('login', () => {
  netlifyIdentity.close();
  navigate('/main');
});

netlifyIdentity.on('logout', () => {
  netlifyIdentity.close();
  navigate('/');
});

const NavBar = () => {
  const user = useSelector(state => state.user);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const currentUser = netlifyIdentity.currentUser();
    setLabel(currentUser !== null ? 'Logout' : 'Login');

    if (!currentUser) {
      navigate('/');
    }
  }, []);

  const handleIdentity = (e) => {
    e.preventDefault();
    netlifyIdentity.open();
  };

  return (
    <div className="navbar-container">
      <span>{user.email}</span>
      <button type="button" onClick={handleIdentity}>
        {label}
      </button>
    </div>
  );
};

export default NavBar;
