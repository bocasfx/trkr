import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { displayFullYear } from '../../sagas/settings';
import Year from './Year';

const year = 2019;

const Calendar = () => {
  const { viewFullYear, viewMonth } = useSelector(state => state.settings);
  const dispatch = useDispatch();
  const achievements = useSelector(state => state.achievements);

  const toggleFullYear = showMonth => () => {
    dispatch(displayFullYear(!viewFullYear, showMonth));
  };

  return (
    <div className="calendar__calendar-container">
      <h1>{year}</h1>
      <div className="calendar__year-container">
        <Year
          year={year}
          viewFullYear={viewFullYear}
          viewMonth={viewMonth}
          onToggleFullYear={toggleFullYear}
          achievements={achievements}
        />
      </div>
    </div>
  );
};

export default Calendar;
