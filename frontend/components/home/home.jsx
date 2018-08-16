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
        <PostIndexContainer />
      </div>
    );
  }
}

export default Home;
