import { connect } from 'react-redux';
import { fetchPost, fetchPosts, createPost} from '../../actions/post_actions';
import PostIndex from './post_index';

const msp = ({entities: {posts}}) => {
  return {
    post: Object.values(posts)
  };
};

const mdp = (dispatch) => {
  return {
    // createPost: (post) => dispatch(createPost(post)),
    // fetchPost: (id) => dispatch(fetchPost(id)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(msp, mdp)(PostIndex);
