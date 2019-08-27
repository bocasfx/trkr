import React from 'react';
import PropTypes from 'prop-types';
import './Day.css';

const Day = ({ dateNumber, achievement, large }) => {
  const toggleAchievement = () => {
    if (dateNumber) {
      console.log('toggle');
    }
  };

  if (!dateNumber) {
    let blankClass = 'day__blank';
    blankClass += large ? ' day__large' : '';
    return <div className={blankClass} />;
  }

  let buttonClass = 'day__button';
  buttonClass += achievement ? ' day__achievement' : '';
  buttonClass += large ? ' day__large' : '';

  return (
    <button type="button" className={buttonClass} onClick={toggleAchievement}>{dateNumber}</button>
  );
};

Day.defaultProps = {
  achievement: null,
  dateNumber: null,
  large: false,
};

Day.propTypes = {
  large: PropTypes.bool,
  dateNumber: PropTypes.number,
  achievement: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    __typename: PropTypes.string.isRequired,
  }),
};

export default Day;
