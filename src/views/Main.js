import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListList from '../components/ListList';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import { callLambda } from '../utils';
import { findUserByEmail as fube } from '../sagas/user';


const Main = () => {
  const dispatch = useDispatch();
  const [lists, setLists] = useState([]);

  const createUser = () => {
    callLambda('create-user', 'POST')
      .catch((err) => {
        console.log(JSON.stringify(err, null, 2)); // eslint-disable-line
      });
  };

  const createList = () => {
    callLambda('create-list', 'POST', JSON.stringify({ name: 'test' }))
      .catch((err) => {
        console.log(JSON.stringify(err, null, 2)); // eslint-disable-line
      });
  };

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
          createUser();
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err, null, 2)); // eslint-disable-line
      });
  }, []);
  return (
    <>
      <NavBar />
      <button type="button" onClick={() => dispatch(fube())}>FUBE</button>
      <button type="button" onClick={createList}>Add List</button>
      <ListList lists={lists} />
      <Calendar />
    </>
  );
};

export default Main;
