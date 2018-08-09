import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionApiUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  window.signup = sessionApiUtil.signup;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to IdeasHunt</h1>, root);
});
