import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectPost = this.selectPost.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }
  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.posts;
    }

    this.props.posts.forEach(post => {
      const sub = post.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(post);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectPost(event) {
    const post = event.currentTarget.innerText;
    this.setState({inputVal: post});
    this.props.history.push(`/posts/1`);
    //redirect
  }

  render(){
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectPost}>{result}</li>
      );
    });
    return (
      <div>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
