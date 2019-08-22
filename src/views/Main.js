import React, { useState, useEffect } from 'react';
import ListList from '../components/ListList';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import { callLambda } from '../utils';

const Main = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    callLambda('find-user-by-email', 'POST')
      .then((response) => {
        const { findUserByEmail } = response.data;
        const responseLists = findUserByEmail ? findUserByEmail.lists.data : [];
        setLists(responseLists);
        return response;
      })
      .then((response) => {
        const { findUserByEmail } = response.data;
        if (!findUserByEmail) {
          callLambda('create-user', 'POST')
            .then((response1) => {
              console.log(response1);
            })
            .catch((err) => {
              console.log(JSON.stringify(err, null, 2)); // eslint-disable-line
            });
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err, null, 2)); // eslint-disable-line
      });
  }, []);
  return (
    <>
      <NavBar />
      <ListList lists={lists} />
      <Calendar />
    </>
  );
}

export default Main;
