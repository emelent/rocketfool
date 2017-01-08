import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import Header from '../layouts/Header';
import {googleSignIn} from '../actions/firebaseActions';


const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    googleSignIn
  }, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
class Landing extends React.Component{
  render(){
    const {googleSignIn, user} = this.props;
    if(user.loggedIn){
      console.log('go to the next one');
      hashHistory.push('/browse');
    }
    return(
      <div>
        <Header onLoginClick={() => hashHistory.push('/login')}
          onSignUpClick={() => hashHistory.push('/signup')}
        />
      </div>
    );
  }
};

export default Landing;
