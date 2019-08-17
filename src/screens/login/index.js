import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { updateAuthStatus } from '../../actions';

const Login = (props) => {
  const [username, setUsername] = useState('');

  const doLogin = () => {
    const data = {
      username,
    };

    axios.post('/.netlify/functions/find-user-by-name', data).then((response) => {
      // eslint-disable-next-line no-underscore-dangle
      const userId = response.data.data.findUserByName._id;
      if (userId) {
        props.updateAuthStatus(true, userId);
        navigate('/main');
      }
    });
  };

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

Login.propTypes = {
  updateAuthStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateAuthStatus }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
