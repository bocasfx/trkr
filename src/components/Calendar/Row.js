import React from 'react';
import './Row.css';

const Row = (props) => {
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
      cells.push(<div key={j}/>);
    } else if (dateNumber > daysInMonth) {
      break;
    } else {
      cells.push(<div key={j}>{dateNumber}</div>);
      dateNumber++;
    }
  }

  return <div className="row-container">{cells}</div>;
};

export default Row;
