import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './TrackerList.css';
import { findTrackerByID, deleteTracker } from '../sagas/actions';
import TrackerListHeader from './TrackerListHeader';

const TrackerList = (props) => {
  const { trackers } = props;
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteTrackerId, setDeleteTrackerId] = useState(null);

  const onTrackerSelection = trackerId => () => {
    dispatch(findTrackerByID(trackerId));
  };

  const removeTracker = () => {
    dispatch(deleteTracker(deleteTrackerId));
    setShowConfirmation(false);
  };

  const renderConfirmation = () => (
    <div className="tracker_list__confirmation">
      <button type="button" onClick={setShowConfirmation(false)}>
        Cancel
      </button>
      <button type="button" onClick={removeTracker}>
        Delete
      </button>
    </div>
  );

  const showConfirmationDialog = id => () => {
    console.log(id);
    setDeleteTrackerId(id);
    setShowConfirmation(true);
  };

  const renderTrackers = () =>
    trackers.map(tracker => (
      <li key={tracker.name}>
        <div className="tracker_list__name-container">
          <div className="tracker_list__color-indicator" />
          <button type="button" onClick={onTrackerSelection(tracker.id)}>
            {tracker.name}
          </button>
        </div>
        <button
          type="button"
          className="invisible-button"
          onClick={showConfirmationDialog(tracker.id)}
        >
          <i className="material-icons">delete</i>
        </button>
      </li>
    ));

  return (
    <>
      {showConfirmation && (
        <div className="tracker_list__confirmation">
          <button type="button" onClick={() => setShowConfirmation(false)}>
            Cancel
          </button>
          <button type="button" onClick={removeTracker}>
            Delete
          </button>
        </div>
      )}
      <TrackerListHeader />
      <ul className="tracker-list-container">{renderTrackers()}</ul>
    </>
  );
};

TrackerList.propTypes = {
  trackers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrackerList;
