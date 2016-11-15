import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CustomButton from './CustomButton.js';
import {fetchUsers} from '../actions/userActions';
import style from '../style.scss';

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
      <ReactCSSTransitionGroup transitionName="slide"
        transitionAppear={true} transitionAppearTimeout={0}
        transitionEnter={false} transitionLeave={false}
      >
        <h2>Hello World</h2>
        <CustomButton kind="primary" onClick={fetchUsers}>
          Update Users
        </CustomButton>
        <br/>
        {fetching ?
            <span>Loading...</span>
          :
            <ul>{userList}</ul>
        }
      </ReactCSSTransitionGroup>
    );
  }
}

export default App;
