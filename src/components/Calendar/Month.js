import React from 'react';
import './Month.css';
import PropTypes from 'prop-types';
import { findAchievementIndex } from '../../utils';
import Day from './Day';

const Month = (props) => {
  const {
    year,
    month,
    viewFullYear,
    achievements,
  } = props;

  const renderWeeks = () => {
    let dateNumber = 1;
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    const firstDay = new Date(year, month).getDay();

    const rows = [];
    for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        if ((rowIdx === 0 && j < firstDay) || dateNumber > daysInMonth) {
          cells.push(<Day key={j} large={!viewFullYear} />);
        } else {
          const achievementIdx = findAchievementIndex(achievements, dateNumber);
          cells.push(
            <Day
              key={j}
              large={!viewFullYear}
              dateNumber={dateNumber}
              achievement={achievements[achievementIdx]}
            />,
          );
          dateNumber++;
        }
      }
      rows.push(<div key={rowIdx} className="month__week-container">{cells}</div>);
    }
    return rows;
  };

  return <div className="month-container">{renderWeeks()}</div>;
};

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  achievements: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewFullYear: PropTypes.bool.isRequired,
};

export default Month;
