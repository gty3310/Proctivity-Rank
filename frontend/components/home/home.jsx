import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <p>Home</p>
        <PostIndexContainer />
      </div>
    );
  }
}

export default Home;
