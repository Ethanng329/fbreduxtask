export function fetchUsers(){
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => {
      dispatch(setUsersToStore(data));
    })
    .catch(error => console.log(error))

  }
}

export function setUsersToStore(users) {
  return {
    type:'USERS_LIST',
    users
  }
}