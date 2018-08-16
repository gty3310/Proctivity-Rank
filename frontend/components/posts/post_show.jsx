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
    if (!this.props.post) {
      return (
        <div>
          <h1>
            Loading...
          </h1>
        </div>
      );
    }
    // debugger;
    return (
      <div >
        <div key={this.props.post.id} className="postShow">
          <div className="whiteBox">
            <div className="postHeader">
              <div className="postimg">
                <img src={`${this.props.post.imageUrl}`} />
              </div>
              <div className="postinfo">
                <div className="postTitle">
                  <h2>
                    {this.props.post.name}
                  </h2>
                </div>
                <div className="postDescription">
                  {this.props.post.tagline}
                  <br/>
                  by {this.props.post.username}
                </div>
              </div>
            </div>
          </div>
          <div className="whiteBox">
            <div className="postBody">
              {/*
              // <div className="photoList">
              //   <img src={`${this.props.post.snapshootUrlOne}`}/>
              //   <img src={`${this.props.post.snapshootUrlTwo}`}/>
              //   <img src={`${this.props.post.snapshootUrlThree}`}/>
              //   <img src={`${this.props.post.snapshootUrlFour}`}/>
              //   <img src={`${this.props.post.snapshootUrlFive}`}/>
              // </div>
              */}
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

        </div>
      </div>
    );
  }
}

export default PostShow;
