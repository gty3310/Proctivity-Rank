import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    //variabes as switch for ghost component
    let hasBanner = () => {
      if (this.props.currentUser ||
        this.props.location.pathname !== "/"){
        return "ghost";
      }
      else {
        return "";
      }
    };
    let hasCreatePostButton = () => {
      if (this.props.location.pathname === "/posts/create") {
        return "ghost";
      }
      else {
        return "";
      }
    };
    let isOnProfilePage = () => {
      if (this.props.location.pathname === `/user/${this.props.currentUser.id}`) {
        return "ghost";
      }
      else {
        return "";
      }
    };

    //for top right corner buttons
    const sessionView = () =>{
      const sessionLinks = () => (
        <nav className="login-signup">
          <button className="white-button medium-size" onClick={() =>
            this.props.openModal('login')}>
            LOG IN
          </button>
          <button className="orange-button medium-size" onClick={() =>
            this.props.openModal('signup')}>
            SIGN UP
          </button>
        </nav>
      );

      const personalGreeting = () => (
        <hgroup className="header-group">
          <Link
                to={`/posts/create`}
                className={hasCreatePostButton()}
                style= {{textDecoration: 'none'}}>
              <button className="orange-button medium-size" >
                  Create Post</button>
          </Link>

          <Link
                to={`/user/${this.props.currentUser.id}`}
                className={isOnProfilePage()}>
                <button className="white-button medium-size" >
                    Profile</button>
          </Link>

          <button className="white-button medium-size" onClick={this.props.logout}>
              Log Out</button>

        <Link
              to={`/user/${this.props.currentUser.id}`}>
              <div>
                <img className="user_img" src={`${this.props.currentUser.imageUrl}`}></img>
              </div>
        </Link>

        </hgroup>
      );
      return this.props.currentUser ? personalGreeting() : sessionLinks();
    };

    return (
      <div>
        <div className="main-nav">
          <div className="nav-bar-left-half">
          <Link
                to={`/`}>
            <div className="logo">
              <img src="https://i.imgur.com/iRzrFIR.png"/>
            </div>
          </Link>
            <div className="search-bar">
              <SearchBarContainer/>
            </div>
          </div>
          <div className="nav-bar-right-half">
            {sessionView()}
          </div>
        </div>

        <div className={hasBanner()}>
          <div className="banner">
            <div className="banner-left">
              <h2>Discover your next favorite productivity tip</h2>
              <p>Productivity Tip Hunt surfaces the best productivity tips for digital age.
                It is a place for productivity enthusiasts
                to share and geek out about the greatest productivity tips,
                and PRODUCTIVITY TIPS ONLY.</p>
              <button className="orange-button large-size" onClick={() =>
                  this.props.openModal('signup')}>
                  SIGN UP
              </button>
            </div>
            <div className="banner-right">
              <img src="https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1533948336/ph_kitty.png"
                ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
