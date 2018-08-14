import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId);
  }
  render(){
    // debugger;
    if (!this.props.post) {
      return (
        <div>
          <p>
            Rendering...
          </p>
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
        </div>
      </div>
    );
  }
}

export default PostShow;
