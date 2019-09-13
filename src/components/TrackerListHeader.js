import React, { useState } from 'react';
import './TrackerListHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { createTracker } from '../sagas/actions';

const TrackerListHeader = (props) => {
  const { showTitle, showButton, dark } = props;
  const [state, setState] = useState({ open: false, trackerName: '' });
  const { open, trackerName } = state;
  const dispatch = useDispatch();
  const { id } = useSelector(mainState => mainState.user);

  const addTracker = () => {
    if (trackerName && trackerName.length) {
      dispatch(createTracker(trackerName, id));
    }
  };

  const onKeyUp = (event) => {
    setState({ trackerName: event.target.value, open: true });
  };

  const renderForm = () => {
    let formClass = 'tracker-list-header__form';
    formClass += open || !showButton ? ' tracker-list-header__form-open' : ' tracker-list-header__form-close';
    formClass += dark ? ' tracker-list-header__dark' : '';
    return (
      <div className={formClass}>
        <input onKeyUp={onKeyUp} placeholder="Tracker name" />
        <button type="button" onClick={addTracker}>Add</button>
      </div>
    );
  };

  let buttonClass = 'tracker-list-header__btn-round tracker-list-header__animated ';
  buttonClass += open ? 'tracker-list-header__closeButton' : 'tracker-list-header__plusButton';

  return (
    <>
      <div className="tracker-list-header__container">
        {showTitle && <h1>Trackers</h1>}
        {showButton && (
          <div
            className={buttonClass}
            onClick={() => setState({ open: !open })}
            role="button"
            onKeyPress={() => {}}
            tabIndex={0}
          >
            <span className="tracker-list-header__close" />
          </div>
        )}
      </div>
      {renderForm()}
    </>
  );
};

TrackerListHeader.propTypes = {
  showTitle: PropTypes.bool,
  showButton: PropTypes.bool,
  dark: PropTypes.bool,
};

TrackerListHeader.defaultProps = {
  showTitle: true,
  showButton: true,
  dark: false,
};

export default TrackerListHeader;
