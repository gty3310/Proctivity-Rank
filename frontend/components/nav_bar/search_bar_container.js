import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';

const msp = ({entities: {posts}}) => {
  return {
    // names: Object.values(posts)
    posts: Object.keys(posts).map(key => posts[key].name)
  };
};

const mdp = (dispatch, ownProps) => {

};

export default withRouter(connect(msp, mdp)(SearchBar));
