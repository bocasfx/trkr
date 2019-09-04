import React, { useState } from 'react';
import './TrackerListHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { createTracker } from '../sagas/trackers';

const TrackerListHeader = () => {
  const [state, setState] = useState({ open: false, trackerName: '' });
  const { open, trackerName } = state;
  const dispatch = useDispatch();
  const { id } = useSelector(mainState => mainState.user);

  const addTracker = () => {
    if (trackerName.length) {
      dispatch(createTracker(trackerName, id));
    }
  };

  const onKeyUp = (event) => {
    setState({ trackerName: event.target.value, open: true });
  };

  const renderForm = () => {
    let formClass = 'tracker_list_header__form';
    formClass += open ? ' tracker_list_header__form-open' : ' tracker_list_header__form-close';
    return (
      <div className={formClass}>
        <input onKeyUp={onKeyUp} />
        <button type="button" onClick={addTracker}>
          Add
        </button>
      </div>
    );
  };

  let buttonClass = 'btn-round animated ';
  buttonClass += open ? 'closeButton' : 'plusButton';

  return (
    <>
      <div className="tracker_list_header__container">
        <h1>Trackers</h1>
        <div
          className={buttonClass}
          onClick={() => setState({ open: !open })}
          role="button"
          onKeyPress={() => {}}
          tabIndex={0}
        >
          <span className="close" />
        </div>
      </div>
      {renderForm()}
    </>
  );
};

export default TrackerListHeader;
