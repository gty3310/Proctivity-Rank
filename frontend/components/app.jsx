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
import PostShowContainer from './posts/post_show_container';
import Home from './home/home_container';

const App = () => (
  <div className="wholeSite">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/posts/:postId' component={PostShowContainer}/>
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
