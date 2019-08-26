import React from 'react';
import './Month.css';
import PropTypes from 'prop-types';

const Month = (props) => {
  const {
    year,
    month,
    viewFullYear,
  } = props;

  const renderWeeks = () => {
    let dateNumber = 1;
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    const firstDay = new Date(year, month).getDay();
    const weekContainerClass = viewFullYear ? 'week-container' : 'week-container-large';

    const rows = [];
    for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        if (rowIdx === 0 && j < firstDay) {
          cells.push(<div key={j} />);
        } else if (dateNumber > daysInMonth) {
          cells.push(<div key={j} />);
        } else {
          cells.push(<div key={j}>{dateNumber}</div>);
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
