import React from 'react';
import './Row.css';
import PropTypes from 'prop-types';

const Row = props => {
  const {
    firstDay,
    rowIdx,
    date,
    daysInMonth,
} = props;

  let dateNumber = date;

  const cells = [];
  for (let j = 0; j < 7; j++) {
    if (rowIdx === 0 && j < firstDay) {
      cells.push(<div key={j} />);
    } else if (dateNumber > daysInMonth) {
      break;
    } else {
      cells.push(<div key={j}>{dateNumber}</div>);
      dateNumber++;
    }
  }

  return <div className="row-container">{cells}</div>;
};

Row.propTypes = {
  firstDay: PropTypes.number.isRequired,
  rowIdx: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  daysInMonth: PropTypes.number.isRequired,
};

export default Row;
