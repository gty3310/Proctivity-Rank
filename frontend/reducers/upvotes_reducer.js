import {
  RECEIVE_UPVOTE
} from '../actions/post_actions';
import merge from 'lodash/merge';

const UpvoteReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_UPVOTE:
      let postId = oldState.postId;
      //here should increase/decrease the number of upvotes 

    default:
      return oldState;
  }
};

export default UpvoteReducer;
