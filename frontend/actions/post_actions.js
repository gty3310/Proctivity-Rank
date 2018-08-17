import * as APIUtil from '../util/post_api_util';
export const RECEIVE_POST = 'RECEIVE_POST';
// export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_FILTERED_POSTS = 'RECEIVE_FILTERED_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receivePost = (post) => ({
  type: RECEIVE_POST,
  post: post
});

export const fetchPosts = () => {
  return dispatch => {
    return APIUtil.fetchPosts().then(posts => {
      return dispatch({type: RECEIVE_POSTS, posts: posts});
    });
  };
};

export const fetchPost = (id) => {
  return dispatch => {
    return APIUtil.fetchPost(id).then(post => {
      return dispatch(receivePost(post));
    });
  };
};

export const createPost = (post) => {
  return dispatch => {
    return APIUtil.createPost(post).then(postCome => {
      return dispatch(receivePost(postCome));
    });
  };
};

export const updateFilteredPosts = (filteredPosts) => dispatch => {
  return dispatch({type: RECEIVE_FILTERED_POSTS, filteredPosts: filteredPosts});
};
// export const updatePost = (post) => {
//   return dispatch => {
//     return APIUtil.updatePost(post).then(postCome => {
//       return dispatch(receivePost(postCome));
//     });
//   };
// };

// export const deletePost = (id) => {
//   return dispatch => {
//     return APIUtil.deletePost(id).then(()=>{
//       return dispatch({type: REMOVE_POST, postId: id});
//     });
//   };
// };
