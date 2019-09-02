import React, { useState } from 'react';
import './TrackerListHeader.css';

const TrackerListHeader = () => {
  const [open, setOpen] = useState(false);

  const renderForm = () => (
    <div className="tracker_list_header__form">
      <input />
      <button type="button" onClick={() => setOpen(false)}>Add</button>
    </div>
  );

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
      { open && renderForm() }
    </>
  );
};

export default TrackerListHeader;
