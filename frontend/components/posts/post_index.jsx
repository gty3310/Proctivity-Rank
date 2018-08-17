import React from 'react';
import { Link } from 'react-router-dom';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: this.props.posts};
  }
  componentDidMount(){
    // debugger;
    this.props.fetchPosts();
    // this.setState({posts: this.props.posts});
  }

  componentWillReceiveProps(nextProps) {
    //compare the old and new filteredPosts only after making sure it is exiting
    // debugger;
    if (this.props.filteredPosts && nextProps.filteredPosts){
      // debugger;

      // if(this.props.filteredPosts.length > 0 && nextProps.filteredPosts > 0){
        if (this.props.filteredPosts !== nextProps.filteredPosts) { //delete this line will make everything show up at begining
          this.setState({posts: nextProps.filteredPosts});
          // debugger;
        }
      // }
      //  else {
      //   this.setState({posts: this.props.posts});
      // }
    }
    // else {
    //   this.setState({posts: this.props.posts});
    // }
  }

  render(){
    // debugger;
    // // console.log(this.props);
    // console.log(this.props.posts);

    const list = this.state.posts.map(post => {
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
