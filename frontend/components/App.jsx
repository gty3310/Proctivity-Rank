import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>

    <h1>Idea Hunt</h1>
  </div>
);

export default App;
