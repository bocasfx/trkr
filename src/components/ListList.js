/* eslint-disable import/no-extraneous-dependencies */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// @ts-ignore
const renderLists = lists => lists.map(list => <div key={list.title}>{list.title}</div>);

const ListList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('/.netlify/functions/lists-read-by-user/240678459528970765').then((response) => {
      const responseLists = response.data.data.findUserByID.lists.data;
      setLists(responseLists);
    });
  }, []);

  return <>{renderLists(lists)}</>;
};

export default ListList;
