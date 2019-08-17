/* eslint-disable import/no-extraneous-dependencies */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// @ts-ignore
const renderLists = lists => lists.map(list => <div key={list.title}>{list.title}</div>);

const ListList = (props) => {
  const [lists, setLists] = useState([]);

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
