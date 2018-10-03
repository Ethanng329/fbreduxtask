import { combineReducers } from 'redux';
import setUsers from './setUsers';

export default combineReducers({
  users: setUsers
});
