import { connect } from 'react-redux';
import userProfile from './user_profile';

const msp = ({entities: {users}}, ownProps) => {
  return {
    user: users[ownProps.match.params.userId]
  };
};

const mdp = (dispatch) => {
  return {

  };
};

export default connect(msp, mdp)(userProfile);
