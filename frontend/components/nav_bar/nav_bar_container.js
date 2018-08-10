import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';

const msp = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()).then(()=>{
      ownProps.history.push("/");
    })
  };
};
// also return fetchUser
//also return fetch all products

export default withRouter(connect(msp, mdp)(NavBar));
