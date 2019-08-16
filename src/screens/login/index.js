import React, { useState } from 'react';
import axios from 'axios';

const doLogin = (username) => {
  const data = {
    username,
  };

  axios.post('/.netlify/functions/find-user-by-name', data).then((response) => {
    // eslint-disable-next-line no-underscore-dangle
    const userId = response.data.data.findUserByName._id;
    console.log(userId);
  });
};

const Login = () => {
  const [username, setUsername] = useState('');

  const onKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      doLogin(username);
    }
    setUsername(evt.target.value);
  };

  return (
    <>
      <input type="text" onKeyUp={onKeyUp} />
      <button type="button" onClick={() => doLogin(username)}>Login</button>
    </>
  );
};

export default Login;
