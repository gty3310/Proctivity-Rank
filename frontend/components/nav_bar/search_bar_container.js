import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';
import { updateFilteredPosts } from '../../actions/post_actions';

const msp = ({entities: {posts}}) => {
  return {
    posts: Object.values(posts)
  };
};
// posts: Object.keys(posts).map(key => posts[key].name)

const mdp = (dispatch) => {
  return {
    updateFilteredPosts: (filteredPosts) => dispatch(
      updateFilteredPosts(filteredPosts)
    )
  };
};

export default withRouter(connect(msp, mdp)(SearchBar));
