import React from 'react';
import PropTypes from 'prop-types';

const renderLists = lists => lists.map(list => <div key={list.title}>{list.title}</div>);

const ListList = (props) => {
  const { lists } = props;

  return <>{renderLists(lists)}</>;
};

ListList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListList;
