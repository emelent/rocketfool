import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchUsers} from '../actions/userActions';

@connect((store) => {
  return {
    users: store.user.users,
    fetching: store.user.fetching,
  };
}, (dispatch) =>{
  return bindActionCreators({
    fetchUsers
  }, dispatch);
})
class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const {users, fetching, fetchUsers} = this.props;
    let userList = users.map((user) => 
      <li key={user.id}>{user.name}</li>
    ).filter((user, index) => index < 2);
    return (
      <div>
        <h2>Hello World</h2>
        <button onClick={fetchUsers}>Update Users</button><br/>
        {fetching ?
            <span>Loading...</span>
          :
            <ul>{userList}</ul>
        }
      </div>
    );
  }
}

export default App;
