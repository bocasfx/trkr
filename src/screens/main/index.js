import React from 'react';
import ListList from '../../components/ListList';
import Calendar from '../../components/Calendar';
import NavBar from '../login/NavBar';
import { useAuth0 } from '../login/login-wrapper';

const Main = () => {
  const result = useAuth0();
  const { loading, user } = result;

  console.log(result);

  if (loading || !user) {
    return (
      <div>Loading...</div>
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
