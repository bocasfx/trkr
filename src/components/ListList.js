import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { closeMenu } from '../sagas/side-menu';
import './ListList.css';
import { findListByID } from '../sagas/achievements';

const ListList = (props) => {
  const { lists } = props;
  const dispatch = useDispatch();

  const onListSelection = listId => () => {
    // dispatch(closeMenu());
    dispatch(findListByID(listId));
  };

  const renderLists = () => lists.map(list => (
    <li key={list.name}>
      <button type="button" onClick={onListSelection(list.id)}>{list.name}</button>
    </li>
  ));

  return <ul className="list-list-container">{renderLists()}</ul>;
};

ListList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListList;
