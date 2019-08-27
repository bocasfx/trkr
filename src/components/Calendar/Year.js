import React from 'react';
import { months } from './constants';
import Header from './Header';
import Month from './Month';
import './Year.css';

const Year = (props) => {
  const {
    year,
    viewFullYear,
    viewMonth,
    onToggleFullYear,
    achievements,
  } = props;

  const from = viewFullYear ? 0 : viewMonth;
  const to = viewFullYear ? 12 : viewMonth + 1;
  const icon = viewFullYear ? 'remove_red_eye' : 'arrow_back';

  const monthElements = [];
  for (let month = from; month < to; month++) {
    const monthAchievements = achievements[year] && achievements[year][month]
      ? achievements[year][month]
      : [];
    monthElements.push(
      <div className="year__month-section" key={month}>
        <div className="year__header-container">
          <h2 className="year__calendar-header">{months[month]}</h2>
          <button type="button" onClick={onToggleFullYear(month)} className="invisible-button">
            <i className="material-icons">{icon}</i>
          </button>
        </div>
        <Header />
        <Month
          year={year}
          month={month}
          achievements={monthAchievements}
          viewFullYear={viewFullYear}
        />
      </div>,
    );
  }
  return monthElements;
};

export default Year;
