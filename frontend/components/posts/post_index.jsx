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
    debugger;
    // console.log(this.props);
    console.log(this.props.posts);
    // const list = this.props.posts.map(post => {
      return (
        <div>
          <p>stuff</p>
        </div>
      );
    // });

  }
}

export default PostIndex;
