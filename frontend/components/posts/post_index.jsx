import React from 'react';
import { Link } from 'react-router-dom';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: this.props.posts};
  }
  componentDidMount(){
    this.props.fetchPosts();
  }

  //compare the old and new filteredPosts only after making sure it is exiting
  componentWillReceiveProps(nextProps) {
    if (this.props.filteredPosts && nextProps.filteredPosts){
      if(nextProps.filteredPosts.length === 0) {
        this.setState({posts: nextProps.posts});
        return;
      }
      if (this.props.filteredPosts.length !== nextProps.filteredPosts.length ) { //delete this line will make everything show up at begining
          this.setState({posts: nextProps.filteredPosts});
      }
    }
  }

  render(){
    // debugger
    const list = this.state.posts.map(post => {
      return (
        <Link
          to={`/posts/${post.id}`}
          style= {{textDecoration: 'none'}}>
          <div key={post.id} className="indexItem">
            <div className="indexItemInner">
              <div className="postimg">
                <img src={`${post.imageUrl}`} />
              </div>
              <div className="postinfo">
                <div className="postTitle">
                  <p>
                    {post.name}
                  </p>
                </div>
                <div className="postDescription">
                  {post.tagline}
                  <br/>
                  by {post.username}
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });

    if (this.state.posts[0] === "No matches"){
      return (<h1>There is no result</h1>);
    }
    return (
      <div className="postIndexList">
        {list}
      </div>
    );

  }
}

export default PostIndex;
