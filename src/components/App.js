import React from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions/userActions';

@connect((store) => {
  return {
    users: store.user.users,
    fetching: store.user.fetching,
  };
})
class App extends React.Component{

  constructor(props){
    super(props);
    this.updateUserList = this.updateUserList.bind(this);
  }

  updateUserList(){
    this.props.dispatch(fetchUsers());
  }

  render(){
    const {users, fetching} = this.props;
    let userList = users.map((user, index) => 
      <li key={index}>{user.name}</li>
    ).filter((user, index) => index < 2);
    return (
      <div>
        <h2>Hello World</h2>
        <span>Fetching: {fetching? "False": "True"}</span><br/><br/>
        <button onClick={this.updateUserList}>Update Users</button><br/>
        <ul>{userList}</ul>
      </div>
    );
  }
}

export default App;
