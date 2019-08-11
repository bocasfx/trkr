import React from 'react';
import { months } from '../../constants';
import Header from './Header';
import Row from './Row';

// const showCalendar = (month, year) => {
//   selectYear.value = year;
//   selectMonth.value = month;

//   // creating all cells
//   let date = 1;
//   for (let i = 0; i < 6; i++) {
//     // creates a table row
//     let row = document.createElement('tr');

//     //creating individual cells, filing them up with data.
//     for (let j = 0; j < 7; j++) {
//       if (i === 0 && j < firstDay) {
//         let cell = document.createElement('td');
//         let cellText = document.createTextNode('');
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         let cell = document.createElement('td');
//         let cellText = document.createTextNode(date);
//         if (
//           date === today.getDate() &&
//           year === today.getFullYear() &&
//           month === today.getMonth()
//         ) {
//           cell.classList.add('bg-info');
//         } // color today's date
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//         date++;
//       }
//     }

//     tbl.appendChild(row); // appending each row into calendar body.
//   }
// };

const year = 2019;
const month = 7;

const Calendar = () => {
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  return (
    <>
      <div>{`${months[month]} ${year}`}</div>
      <Header />
      <Row
        firstDay={firstDay}
        rowIdx={0}
        date={1}
        daysInMonth={daysInMonth}
      />
    </>
  );
};

export default Calendar;
