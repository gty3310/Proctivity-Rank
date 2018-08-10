import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const sessionView = () =>{
      const sessionLinks = () => (
        <nav className="login-signup">
          <button className="white-button" onClick={() =>
              this.props.openModal('login')}>
              LOG IN
            </button>
            <button className="orange-button" onClick={() =>
                this.props.openModal('signup')}>
                SIGN UP
              </button>
            </nav>
          );
          const personalGreeting = () => (
            <hgroup className="header-group">
              <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
              <button className="header-button" onClick={this.props.logout}>
                Log Out</button>
            </hgroup>
          );
          return this.props.currentUser ? personalGreeting() : sessionLinks();
    };

    return (
      <div className="main-nav">
        <div className="nav-bar-left-half">
          <div className="logo"></div>
          <div className="search-bar"></div>
        </div>
        <div className="nav-bar-right-half">
          {sessionView()}
        </div>
      </div>
    );
  }
}

export default NavBar;
