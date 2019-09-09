import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';
import TrackerList from './TrackerList';
import { toggleMenu } from '../sagas/actions';
import './SideMenu.css';

const SideMenu = () => {
  const trackers = useSelector(state => state.trackers);
  const isOpen = useSelector(state => state.sideMenu.isOpen);
  const dispatch = useDispatch();

  const onMenuStateChange = (state) => {
    dispatch(toggleMenu(state.isOpen));
  };

  return (
    <Menu onStateChange={onMenuStateChange} isOpen={isOpen}>
      <TrackerList trackers={trackers} />
    </Menu>
  );
};

export default SideMenu;
