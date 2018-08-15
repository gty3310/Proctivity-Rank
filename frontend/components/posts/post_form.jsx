import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.errors = [''];
  }
  handleInput(field) {
    return (e)=>{
      this.setState({[field]: e.currentTarget.value});
    };
  }

  renderErrors() {
    return(
      <ul>
        <li>{this.errors[0]}</li>
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.name === ""){
      this.errors=['error'];
      console.log(this.errors[0]);
    } else if (this.state.tagline === "") {
    } else if (this.state.description === "") {
    }
    else {
        this.props.action(this.state).then(()=>{
          //fetch post to get post's id, and push history to that place

          this.props.history.push("/");
        }
      );
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>

            <div className="postFormInputItem">
              <h4>
                Idea Name *
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.name}
                placeholder="Enter the idea's name"
                onChange={this.handleInput("name")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 Tagline *
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.tagline}
                placeholder="Enter the idea's tagline/short description"
                onChange={this.handleInput("tagline")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 Description *
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.description}
                placeholder="Enter the idea's long description"
                onChange={this.handleInput("description")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 Idea Icon
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.imageUrl}
                placeholder="Enter the url for an icon that represent this idea"
                onChange={this.handleInput("imageUrl")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 First Image
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.snapshootUrlOne}
                placeholder="Enter the url for a image for this idea"
                onChange={this.handleInput("snapshootUrlOne")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 Second Image
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.snapshootUrlTwo}
                placeholder="Enter the url for a image for this idea"
                onChange={this.handleInput("snapshootUrlTwo")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 Third Image
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.snapshootUrlThree}
                placeholder="Enter the url for a image for this idea"
                onChange={this.handleInput("snapshootUrlThree")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 Forth Image
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.snapshootUrlFour}
                placeholder="Enter the url for a image for this idea"
                onChange={this.handleInput("snapshootUrlFour")}/>
            </div>

            <div className="postFormInputItem">
              <h4>
                 Fifth Image
              </h4>
              <input
                className="productFormInput"
                type="text"
                value={this.state.snapshootUrlFive}
                placeholder="Enter the url for a image for this idea"
                onChange={this.handleInput("snapshootUrlFive")}/>
            </div>

            <br/>
            {this.renderErrors()}
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default PostForm;
