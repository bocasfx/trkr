/* eslint-disable import/no-extraneous-dependencies */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import netlifyIdentity from 'netlify-identity-widget';

// @ts-ignore
const renderLists = lists => lists.map(list => <div key={list.title}>{list.title}</div>);

const ListList = (props) => {
  const [lists, setLists] = useState([]);

  const generateHeaders = () => {
    const headers = { 'Content-Type': 'application/json' };
    if (netlifyIdentity.currentUser()) {
      return netlifyIdentity.currentUser().jwt().then((token) => ({ ...headers, Authorization: `Bearer ${token}` }));
    }
    return Promise.resolve(headers);
  };

  useEffect(() => {
    const { userId } = props;
    axios.get(`/.netlify/functions/find-user-by-id/${userId}`).then((response) => {
      const responseLists = response.data.data.findUserByID.lists.data;
      setLists(responseLists);
    });
  }, []);

  return <>{renderLists(lists)}</>;
};

const mapStateToProps = (state) => {
  const { userId } = state.auth;
  return {
    userId,
  };
};

export default connect(mapStateToProps)(ListList);
