import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import { findUserByEmail } from '../sagas/user';
import SideMenu from '../components/SideMenu';
import calendarImage from '../media/calendar.jpg';
import './Main.css';
import TrackerListHeader from '../components/TrackerListHeader';

const Main = () => {
  const dispatch = useDispatch();
  const trackers = useSelector(state => state.trackers);

  useEffect(() => {
    dispatch(findUserByEmail());
  }, []);

  return (
    <>
      {trackers.length && <SideMenu />}
      <NavBar />
      {trackers.length ? (
        <Calendar />
      ) : (
        <div className="main__no-trackers">
          <img src={calendarImage} alt="calendar" />
          <div>Create a tracker to get started.</div>
          <TrackerListHeader />
        </div>
      )}
    </>
  );
};

export default Main;
