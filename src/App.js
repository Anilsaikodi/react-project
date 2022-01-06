import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Books from "./books";
import Header from "./header";
import ScrollToTop from "./scrolltotop";
import "./sass/style.css"

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Header></Header>
      <Books></Books>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default App;
