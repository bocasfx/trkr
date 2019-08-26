import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { months } from './constants';
import Header from './Header';
import Month from './Month';
import './index.css';
import { displayFullYear } from '../../sagas/settings';

const year = 2019;

const Calendar = () => {
  const achievements = useSelector(state => state.achievements);
  const dispatch = useDispatch();

  const setViewFullYear = viewMonth => () => {
    dispatch(displayFullYear(false, viewMonth));
  };

  const renderMonths = () => {
    const monthElements = [];
    for (let idx = 0; idx < 12; idx++) {
      monthElements.push(
        <div className="month-section" key={idx}>
          <div className="claendar-header-container">
            <h2 className="calendar-header">{months[idx]}</h2>
            <i className="material-icons" onClick={setViewFullYear(idx)}>remove_red_eye</i>
          </div>
          <Header />
          <Month year={year} month={idx} achievements={achievements} />
        </div>,
      );
    }
    return monthElements;
  };

  return (
    <>
      <h1>{year}</h1>
      <div className="calendar-container">
        {renderMonths()}
      </div>
    </>
  );
};

export default Calendar;
