import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { callLambda } from '../utils';

const renderLists = lists => lists.map(list => <div key={list.title}>{list.title}</div>);

const ListList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    callLambda('find-user-by-email', 'POST')
      .then((response) => {
        const responseLists = response.data.findUserByEmail.lists.data;
        setLists(responseLists);
      })
      .catch((err) => {
        console.log(JSON.stringify(err, null, 2)); // eslint-disable-line
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
