import React from 'react';
import { useSelector } from 'react-redux';
import { months } from './constants';
import Header from './Header';
import Month from './Month';
import './Calendar.css';

const year = 2019;
const month = 6;

const achievements = useSelector(state => state.achievements);

const Calendar = () => (
  <div className="calendar-container">
    <h1 className="calendar-header">{`${months[month]} ${year}`}</h1>
    <Header />
    <Month
      year={year}
      month={month}
      achievements={achievements}
    />
  </div>
);

export default Calendar;
