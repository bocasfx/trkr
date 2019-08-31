import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';
import TrackerList from './TrackerList';
import { toggleMenu } from '../sagas/side-menu';
import './SideMenu.css';
import AddTrackerModal from './AddTrackerModal';

const SideMenu = () => {
  const trackers = useSelector(state => state.trackers);
  const isOpen = useSelector(state => state.sideMenu.isOpen);
  const dispatch = useDispatch();

  const onMenuStateChange = (state) => {
    dispatch(toggleMenu(state.isOpen));
  };

  return (
    <Menu onStateChange={onMenuStateChange} isOpen={isOpen}>
      <div className="side_menu__header">
        <h1>Trackers</h1>
        <AddTrackerModal />
      </div>
      <TrackerList trackers={trackers} />
    </Menu>
  );
};

export default SideMenu;
