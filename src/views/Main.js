import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import { findUserByEmail } from '../sagas/user';
import SideMenu from '../components/SideMenu';

const Main = () => {
  const dispatch = useDispatch();
  const trackers = useSelector(state => state.trackers);

  useEffect(() => {
    dispatch(findUserByEmail());
  }, []);

  return (
    <>
      <SideMenu />
      <NavBar />
      {trackers.length ? <Calendar /> : <div>No trackers</div>}
    </>
  );
};

export default Main;
