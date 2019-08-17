import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListList from '../../components/ListList';
import Calendar from '../../components/Calendar';

const Main = (props) => {
  const { isAuthenticated } = props;
  return isAuthenticated ? (
    <>
      <ListList />
      <Calendar />
    </>
  ) : <div>Not authorized</div>;
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated,
  };
};

export default connect(mapStateToProps)(Main);
