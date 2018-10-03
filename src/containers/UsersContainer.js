import { connect } from 'react-redux';
import Users from '../components/Users';
import { fetchUsers } from '../actions';

const mapStateToProps = reduxState => {
  return {
    users: reduxState.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
