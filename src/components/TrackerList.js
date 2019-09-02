import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './TrackerList.css';
import { findTrackerByID } from '../sagas/achievements';
import TrackerListHeader from './TrackerListHeader';

const TrackerList = (props) => {
  const { trackers } = props;
  const dispatch = useDispatch();

  const onTrackerSelection = trackerId => () => {
    dispatch(findTrackerByID(trackerId));
  };

  const renderTrackers = () => trackers.map(tracker => (
    <li key={tracker.name}>
      <button type="button" onClick={onTrackerSelection(tracker.id)}>{tracker.name}</button>
    </li>
  ));

  return (
    <>
      <TrackerListHeader />
      <ul className="tracker-list-container">
        {renderTrackers()}
      </ul>
    </>
  );
};

TrackerList.propTypes = {
  trackers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrackerList;