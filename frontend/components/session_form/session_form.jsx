import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  loginDemoUser() {
    this.setState( {username: "demo_user", password: "password"} );
    const user = Object.assign({}, this.state);
    this.props.processForm({username: "demo_user", password: "password"})
      .then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
        <br/>
      </ul>
    );
  }

  render() {
    let demoUserButton = null;
    let welcomeLine = null;
    let emailInput = () =>{
      if (this.props.formType == 'signup'){
        return (
          <label>Email:
            <input type="text"
              onChange={this.update('email')}
              className="login-input"
            />
          </label>
        );
      }
    };


    if (this.props.formType == 'signup'){
      welcomeLine = "Sign Up to Join The Community";
    }
    else {
      demoUserButton = <button className="orange-button medium-size"
        onClick={this.loginDemoUser} >DEMO LOG IN</button>;
      welcomeLine = "Log In to Join The Community";
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <button
            className="backButton"
            onClick={this.props.closeModal}>
            {'<'}
          </button>

          <br/>
          <h2>
            {welcomeLine}
          </h2>
          <p>
            Productivity-Tips Hunt is a community to share and geek out about
            the most useful productivity tips. Join us :)
          </p>
          <div className="login-form">
            <br/>
            <div className="input">
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  />
              </label>
            </div>

            <div className="input">
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  />
              </label>
            </div>

            <div className="input">
              {emailInput()}
            </div>
            {this.renderErrors()}
            <input className="session-submit orange-button medium-size" type="submit"
              value={this.props.formType} />
            {demoUserButton}
          </div>
        </form>
        <div className="modal-screen"></div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
