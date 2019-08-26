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
  const { viewFullYear, viewMonth } = useSelector(state => state.settings);
  const dispatch = useDispatch();

  const setViewFullYear = showMonth => () => {
    dispatch(displayFullYear(false, showMonth));
  };

  const from = viewFullYear ? 0 : viewMonth;
  const to = viewFullYear ? 12 : viewMonth;

  const renderMonths = () => {
    const monthElements = [];
    for (let idx = from; idx < to; idx++) {
      monthElements.push(
        <div className="month-section" key={idx}>
          <div className="claendar-header-container">
            <h2 className="calendar-header">{months[idx]}</h2>
            <button type="button" onClick={setViewFullYear(idx)} className="invisible-button">
              <i className="material-icons">remove_red_eye</i>
            </button>
          </div>
          <Header />
          <Month year={year} month={idx} achievements={achievements} viewFullYear={viewFullYear} />
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
