import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="button_wrapper">
          <button className="button_style" onClick={this.props.fetchUsers()}>
            Click for user info display
          </button>
        </div>
        <div className="users_container">
          {this.props.users.map(user => {
            return (
              <div key={user.id} className="user_info">
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
                  <li>company: {user.company.name}</li>
                  <li>
                    website:
                    <a href={user.website}>{user.website}</a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
