export default function setUsers(state = [], action) {
  switch (action.type) {
    case 'USERS_LIST':
      return action.users;
    default:
      return state;
  }
}
