import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    //to avoid async
    this.setState({inputVal: event.currentTarget.value}, ()=>{
      this.matches();
    });
  }
  matches() {
    let matches = [];
    if (this.state.inputVal.length === 0 ) {
      matches = this.props.posts;
    } else {
      this.props.posts.forEach(post => {
        const sub = post.name.slice(0, this.state.inputVal.length);
        if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
          matches.push(post);
        }
      });
    }
    if (matches.length === 0) {
      matches.push('No matches');
    }
    this.props.updateFilteredPosts(matches);
  }

  render(){
    const results = () => {
      this.matches();
      return (<div></div>);
    };

    return (
      <div className='search-bar-container'>
        <div className='search-bar'>
          <img className="searchBarIcon"
              src="https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1534529239/search_icon.png"
              />
            <input className="searchBarInput"
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
        </div>
      </div>
    );
  }
}

export default SearchBar;
