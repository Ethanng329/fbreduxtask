import React from 'react';
import UsersContainer from '../containers/UsersContainer';
import Header from '../components/Header';
import { fetchUsers } from '../actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <UsersContainer />
      </div>
    );
  }
}

export default App;
