import * as APIUtil from '../util/upvote_api_util';
export const RECEIVE_UPVOTE = 'RECEIVE_UPVOTE';

export const createUpvote = (upvote) => {
  return dispatch => {
    return APIUtil.createUpvote((returnedUpvote)=>{
      return dispatch({type: RECEIVE_UPVOTE, upvote: returnedUpvote});
    });
  };
};
export const deleteUpvote = (upvote) => {
  return dispatch => {
    return APIUtil.deleteUpvote((returnedUpvote)=>{
      return dispatch({type: RECEIVE_UPVOTE, upvote: returnedUpvote});
    });
  };
};
