import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionApiUtil from './util/session_api_util'
import * as sessionAction from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  // debugger;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.signup = sessionAction.signup;
  window.login = sessionAction.login;
  window.logout = sessionAction.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END
  // debugger;

  const root = document.getElementById('root');
  // ReactDOM.render(<h1>Welcome to IdeasHunt</h1>, root);
  ReactDOM.render(<Root store={store} />, root);
});
