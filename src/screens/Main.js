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
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
      <ListList />
      <Calendar />
    </>
  );
};

export default Main;
