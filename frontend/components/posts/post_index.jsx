import React from 'react';
import { Link } from 'react-router-dom';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchPosts();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.filteredPosts.length != nextProps.filteredPosts.length) {
  //     this.props.fetchPost(nextProps.match.params.postId);
  //   }
  // }

  render(){
    // debugger;
    // // console.log(this.props);
    // console.log(this.props.posts);

    const list = this.props.posts.map(post => {
      return (
        <Link
          to={`/posts/${post.id}`}
          style= {{textDecoration: 'none'}}>
          <div key={post.id} className="indexItem">
            <div className="postimg">
              <img src={`${post.imageUrl}`} />
            </div>
            <div className="postinfo">
              <div className="postTitle">{post.name}</div>
              <div className="postDescription">
                {post.tagline}
                <br/>
                by {post.username}
              </div>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div className="postIndexList">
        {list}
      </div>
    );

  }
}

export default PostIndex;
