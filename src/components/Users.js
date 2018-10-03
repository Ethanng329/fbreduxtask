import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        this is the place for displaying users:
        <button onClick={this.props.fetchUsers()}>
          Click for user info display
        </button>
        {this.props.users.map(user => {
          return (
            <div key={user.id}>
              <ul>
                <li>
                  id#
                  {user.id}
                </li>
                <li>
                  name:
                  {user.name}
                </li>
                <li>
                  username:
                  {user.username}
                </li>
                <li>
                  email:
                  {user.email}
                </li>
                <li>
                  address:
                  {user.address.street},{user.address.suite},{' '}
                  {user.address.city}
                </li>
                <li>
                  phone:
                  {user.phone}
                </li>
                <li>
                  website:
                  <a href={user.website}>{user.website}</a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
