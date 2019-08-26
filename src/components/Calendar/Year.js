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
  for (let idx = from; idx < to; idx++) {
    monthElements.push(
      <div className="year__month-section" key={idx}>
        <div className="year__header-container">
          <h2 className="year__calendar-header">{months[idx]}</h2>
          <button type="button" onClick={onToggleFullYear(idx)} className="invisible-button">
            <i className="material-icons">{icon}</i>
          </button>
        </div>
        <Header />
        <Month year={year} month={idx} achievements={achievements} viewFullYear={viewFullYear} />
      </div>,
    );
  }
  return monthElements;
};

export default Year;
