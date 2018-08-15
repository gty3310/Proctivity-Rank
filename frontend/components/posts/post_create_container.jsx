import { connect } from 'react-redux';
import {createPost} from '../../actions/post_actions';
import PostForm from './post_form';

const msp = ({entities: {posts}}, ownProps) => {
  return {
    post: { name:"", tagline:"", description:"",
       imageUrl:"", snapshootUrlOne:"",
       snapshootUrlTwo:"", snapshootUrlThree:"", snapshootUrlFour:"",
       snapshootUrlFive:""},
    formType:"Create a New Post"
  };
};

const mdp = (dispatch) => {
  return {
    action: (post) => dispatch(createPost(post))
  };
};

export default connect(msp, mdp)(PostForm);
