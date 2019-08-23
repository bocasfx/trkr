import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import { findUserByEmail } from '../sagas/user';
import SideMenu from '../components/SideMenu';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findUserByEmail());
  }, []);

  return (
    <>
      <SideMenu />
      <NavBar />
      <Calendar />
    </>
  );
};

export default Main;
