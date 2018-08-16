import React from 'react';
import { Link } from 'react-router-dom';

class userProfile extends React.Component {
  render(){
    //if this user is not the user we like to look at
    return (
      <div className="userProfile">
        <div className="user_img_container">
          <img className="user_img" src={`${this.props.user.imageUrl}`}></img>
        </div>
        <div className="username_container">
          <h2 className="username">{`${this.props.user.username}`}</h2>
        </div>
        <div className="email_container">
          <h2 className="email">{`${this.props.user.email}`}</h2>
        </div>
        <div className="headline_container">
          <h2 className="headline">{`${this.props.user.headline}`}</h2>
        </div>
        <div className="post_create_button_container">
          <Link
            to={`/posts/create`}
            style= {{textDecoration: 'none'}}>
            <button className="orange-button medium-size" >
              Create Post</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default userProfile;
