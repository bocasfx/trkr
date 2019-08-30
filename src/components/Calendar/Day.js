import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Day.css';
import { createAchievement, deleteAchievement } from '../../sagas/achievements';

const Day = (props) => {
  const {
    day,
    month,
    year,
    achievement,
    large,
  } = props;

  const [hasAchievement] = useState(!!achievement);
  const dispatch = useDispatch();
  const selectedList = useSelector(state => state.selectedList);

  // setHasAchievement(!!achievement);

  const toggleAchievement = () => {
    if (!hasAchievement) {
      dispatch(createAchievement(year, month, day, selectedList));
    } else {
      dispatch(deleteAchievement(achievement));
    }
  };

  if (!day) {
    let blankClass = 'day__blank';
    blankClass += large ? ' day__large' : '';
    return <div className={blankClass} />;
  }

  let buttonClass = 'day__button';
  buttonClass += achievement ? ' day__achievement' : '';
  buttonClass += large ? ' day__large' : '';

  return (

    <button type="button" className={buttonClass} onClick={toggleAchievement}>
      <div className="spinner" />
      <div>{day}</div>
    </button>
  );
};

Day.defaultProps = {
  achievement: null,
  day: null,
  month: null,
  year: null,
  large: false,
};

Day.propTypes = {
  large: PropTypes.bool,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
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
