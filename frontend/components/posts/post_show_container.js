import { connect } from 'react-redux';
import { fetchPost, fetchPosts, createPost} from '../../actions/post_actions';
import PostShow from './post_show';

const msp = ({entities: {posts}}, ownProps) => {
  return {
    post: posts[ownProps.match.params.postId]
  };
};

const mdp = (dispatch) => {
  return {
    // createPost: (post) => dispatch(createPost(post)),
    // fetchPost: (id) => dispatch(fetchPost(id)),
    fetchPost: (id) => dispatch(fetchPost(id))
  };
};

export default connect(msp, mdp)(PostShow);
