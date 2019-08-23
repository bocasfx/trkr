import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';
import ListList from './ListList';
import { toggleMenu } from '../sagas/side-menu';
import './SideMenu.css';

const SideMenu = () => {
  const lists = useSelector(state => state.lists);
  const isOpen = useSelector(state => state.sideMenu.isOpen);
  const dispatch = useDispatch();

  const onMenuStateChange = (state) => {
    dispatch(toggleMenu(state.isOpen));
  };

  return (
    <Menu onStateChange={onMenuStateChange} isOpen={isOpen}>
      <h1>Trackers</h1>
      <ListList lists={lists} />
    </Menu>
  );
};

export default SideMenu;
