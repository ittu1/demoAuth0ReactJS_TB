import React from 'react';
import './App.css';
import LoginButton from './compenents/LoginButton';
import LogOutButton from './compenents/LogOutButton';
import Profile from './compenents/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();


  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogOutButton />
      <Profile />
   </> 
  );
}

export default App;
