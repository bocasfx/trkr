import React from 'react';
import ListList from '../components/ListList';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import { useAuth0 } from '../utils/Auth0Provider';

const Main = () => {
  const result = useAuth0();
  const { loading, user } = result;

  console.log(result);

  if (loading || !user) {
    return (
      <div>Unauthorized.</div>
    );
  }

  return (
    <>
      <NavBar />
      <ListList />
      <Calendar />
    </>
  );
};

export default Main;
