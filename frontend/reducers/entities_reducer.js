import { combineReducers } from 'redux';

import posts from './posts_reducer';
import filteredPosts from './filtered_posts_reducer';
// import comments from './comments_reducer';
import users from './users_reducer';

export default combineReducers({
  posts,
  filteredPosts,
  // comments,
  users

});
