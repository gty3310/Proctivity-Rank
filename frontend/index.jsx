import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionApiUtil from './util/session_api_util'
import * as postApiUtil from './util/post_api_util'
import * as sessionAction from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';
import Fingerprint2 from 'fingerprintjs2';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  let browserFingerprint = "";
  //store window.currentUser to redux global state, allow page refresh
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  new Fingerprint2().get(function(result, components) {
    browserFingerprint = result;
  });
  //get current minuate
  console.log(new Date().getTime() / 60000);

  window.createPost = postApiUtil.createPost;
  window.fetchPosts = postApiUtil.fetchPosts;
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
