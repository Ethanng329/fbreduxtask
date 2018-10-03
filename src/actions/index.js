// fetch users list via API from jsonplaceholder
export function fetchUsers() {
  return function(dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => {
        dispatch(setUsersToStore(data));
      })
      .catch(error => console.log(error));
  };
}

//action to call reducer to save data to store
export function setUsersToStore(users) {
  return {
    type: 'USERS_LIST',
    users
  };
}
