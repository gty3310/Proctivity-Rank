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
              <button className="white-button" onClick={this.props.logout}>
                  Log Out</button>
              <img className="user_img" src={`${this.props.currentUser.image_url}`}></img>
            </hgroup>
          );
          return this.props.currentUser ? personalGreeting() : sessionLinks();
    };

    return (
      <div className="main-nav">
        <div className="nav-bar-left-half">
          <div className="logo">
            <img src="https://i.imgur.com/iRzrFIR.png"/>
          </div>
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
