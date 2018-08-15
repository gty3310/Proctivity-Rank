import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  render(){
    
    return (
      <div>
        <p>{this.props.formType}</p>
      </div>
    );
  }
}

export default PostForm;
