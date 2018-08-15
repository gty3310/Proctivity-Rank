import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount(){
  //   debugger
  //   this.props.fetchPost(this.props.match.params.postId);
  // }
  render(){
    if (!this.props.post) {
      return (
        <div>
          <h1>
            The post you are looking for does not exist
          </h1>
        </div>
      );
    }
    return (
      <div className="postShow">
        <div key={this.props.post.id} className="postShow">
          <div className="postimg">
            <img src={`${this.props.post.imageUrl}`} />
          </div>
          <div className="postinfo">
            <div className="postTitle">{this.props.post.name}</div>
            <div className="postDescription">
              {this.props.post.tagline}
              <br/>
              by {this.props.post.username}
            </div>
          </div>
          <div className="photoList">
            <img src={`${this.props.post.snapshootUrlOne}`}/>
            <img src={`${this.props.post.snapshootUrlTwo}`}/>
            <img src={`${this.props.post.snapshootUrlThree}`}/>
            <img src={`${this.props.post.snapshootUrlFour}`}/>
            <img src={`${this.props.post.snapshootUrlFive}`}/>
          </div>
          <br/>
          <div className="description">
            <p>
              {this.props.post.description}
            </p>
          </div>
          <div className="comments">

          </div>
        </div>
      </div>
    );
  }
}

export default PostShow;
