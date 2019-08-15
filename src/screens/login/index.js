import React, { useState } from 'react';

const doLogin = (username) => {
  console.log(username);
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
