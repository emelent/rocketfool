import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CustomButton from '../components/CustomButton.js';
import {fetchUsers} from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    fetching: state.user.fetching,
  };
}; 

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    fetchUsers
  }, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
class UserList extends React.Component{

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
        <CustomButton kind="primary" onClick={fetchUsers}>
          Reload User 
        </CustomButton>
        <br/>
        {fetching ?
            <span>Wait for it...</span>
          :
            <ul>{userList}</ul>
        }
      </ReactCSSTransitionGroup>
    );
  }
}

export default UserList;
