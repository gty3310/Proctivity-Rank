import { connect } from 'react-redux';
import {createPost} from '../../actions/post_actions';
import PostForm from './post_form';

const msp = ({entities: {posts}}, ownProps) => {
  debugger
  return {
    post: { name:"", tagline:"", description:"",
       image_url:"", snapshoot_url_one:"",
       snapshoot_url_two:"", snapshoot_url_three:"", snapshoot_url_four:"",
       snapshoot_url_five:""},
    formType:"Create a New Post"
  };
};

const mdp = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(msp, mdp)(PostForm);
