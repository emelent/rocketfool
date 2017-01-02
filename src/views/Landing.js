import React from 'react';
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
    const {googleSignIn} = this.props;
    return(
      <div>
        <Header onLoginClick={googleSignIn}/>
      </div>
    );
  }
};

export default Landing;
