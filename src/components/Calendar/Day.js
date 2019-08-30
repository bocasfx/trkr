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
      const newAchievement = {
        year,
        month,
        day,
        list: selectedList,
      };
      dispatch(createAchievement(newAchievement));
    } else {
      dispatch(deleteAchievement(achievement));
    }
  };

  if (!day) {
    let blankClass = 'day__blank';
    blankClass += large ? ' day__large' : '';
    return <div className={blankClass} />;
  }

  const pending = (achievement && achievement.pending) || false;
  const completed = (achievement && achievement.completed) || false;

  let buttonClass = 'day__button';
  buttonClass += completed ? ' day__achievement' : '';
  buttonClass += large ? ' day__large' : '';

  let spinnerClass = 'spinner';
  spinnerClass += pending ? ' spinner-animation' : '';

  const onClick = pending ? null : toggleAchievement;

  return (

    <button type="button" className={buttonClass} onClick={onClick}>
      <div className={spinnerClass} />
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
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    pending: PropTypes.bool,
  }),
};

export default Day;
