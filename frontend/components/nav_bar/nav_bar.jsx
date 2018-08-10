import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({currentUser, logout, openModal}) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="white-button" onClick={() => openModal('login')}>
        LOG IN
      </button>
      <button className="orange-button" onClick={() => openModal('signup')}>
        SIGN UP
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default NavBar;
