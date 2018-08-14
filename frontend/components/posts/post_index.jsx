import React from 'react';
import { Link } from 'react-router-dom';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    // debugger;
    // // console.log(this.props);
    // console.log(this.props.posts);
    const list = this.props.posts.map(post => {
          return (
            <div key={post.id}>
              <div className="postimg">
                <img src={`${post.imageUrl}`} />
              </div>
              <div>
                <h1>{post.name}</h1>
                <p>{post.tagline}</p>
                <p>by </p>
              </div>
            </div>
          );
        });
    return (
      <div>
        {list}
      </div>
    );

  }
}

export default PostIndex;
