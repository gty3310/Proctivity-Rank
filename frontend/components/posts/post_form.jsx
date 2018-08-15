import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = this.props.post;
  }

  render(){
    debugger;
    if (!this.props.post) {
      return (
        <div>
          <p>
            Rendering......
          </p>
        </div>
      );
    }
    return (
      <div>
        <p>{this.props.formType}</p>
      </div>
    );
  }
}

export default PostForm;
