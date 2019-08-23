import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListList from '../components/ListList';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import { findUserByEmail } from '../sagas/user';

const Main = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  useEffect(() => {
    dispatch(findUserByEmail());
  }, []);

  return (
    <>
      <NavBar />
      <ListList lists={lists} />
      <Calendar />
    </>
  );
};

export default Main;
