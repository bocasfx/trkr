import React from 'react';
import './Month.css';
import PropTypes from 'prop-types';
import { findAchievementIndex } from '../../utils';

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
    const weekContainerClass = viewFullYear ? 'month__week-container' : 'month__week-container-large';

    const rows = [];
    for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        if ((rowIdx === 0 && j < firstDay) || dateNumber > daysInMonth) {
          cells.push(<div key={j} />);
        } else {
          const achievementClass = findAchievementIndex(achievements, dateNumber) >= 0 
            ? 'month__achievement'
            : '';

          cells.push(<div className={achievementClass} key={j}>{dateNumber}</div>);
          dateNumber++;
        }
      }
      rows.push(<div key={rowIdx} className={weekContainerClass}>{cells}</div>);
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
