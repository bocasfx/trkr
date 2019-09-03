import React, { useState } from 'react';
import './TrackerListHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { createTracker } from '../sagas/trackers';

const TrackerListHeader = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.user);

  const addTracker = () => {
    dispatch(createTracker('hello', id));
  };

  const renderForm = () => {
    let formClass = 'tracker_list_header__form';
    formClass += open ? ' tracker_list_header__form-open' : ' tracker_list_header__form-close';
    return (
      <div className={formClass}>
        <input />
        <button type="button" onClick={addTracker}>Add</button>
      </div>
    )
  };

  let buttonClass = 'btn-round animated ';
  buttonClass += open ? 'closeButton' : 'plusButton';

  return (
    <>
      <div className="tracker_list_header__container">
        <h1>Trackers</h1>
        <div className={buttonClass} onClick={() => setOpen(!open)}>
          <span className="close" />
        </div>
        {/* <div className={rotated}>
          <button type="button" className="tracker_list_header__add-button" onClick={() => setOpen(!open)}>+</button>
        </div> */}
      </div>
      { renderForm() }
    </>
  );
};

export default TrackerListHeader;
