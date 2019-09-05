import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './TrackerList.css';
import { findTrackerByID } from '../sagas/achievements';
import TrackerListHeader from './TrackerListHeader';
import { deleteTracker } from '../sagas/trackers';

const TrackerList = (props) => {
  const { trackers } = props;
  const dispatch = useDispatch();

  const onTrackerSelection = trackerId => () => {
    dispatch(findTrackerByID(trackerId));
  };

  const removeTracker = id => () => {
    dispatch(deleteTracker(id));
  };

  const renderTrackers = () => trackers.map(tracker => (
    <li key={tracker.name}>
      <div className="tracker_list__name-container">
        <div className="tracker_list__color-indicator" />
        <button type="button" onClick={onTrackerSelection(tracker.id)}>{tracker.name}</button>
      </div>
      <button type="button" className="invisible-button" onClick={removeTracker(tracker.id)}>
        <i className="material-icons">delete</i>
      </button>
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
