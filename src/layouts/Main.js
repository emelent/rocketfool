import React from 'react';

import UserList from '../containers/UserList';


class Main extends React.Component{
  render(){
    return(
      <div>
        <h1>User List</h1>
        <UserList />
      </div>
    );
  }
};

export default Main;
