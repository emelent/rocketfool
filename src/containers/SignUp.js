import React from 'react';
import Button from '../components/CustomButton.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

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
class Login extends React.Component{

  render(){
    let {style, onCloseBtnClick, googleSignIn} = this.props;
    return (
      <div style={{...styles.container, ...style}}>
        <div style={styles.formContainer}>
          <div style={styles.closeBtn}>
            <Link to="/browse">X</Link>
          </div>
          <div style={styles.titleContainer}>
            <span style={styles.title}>Login</span>
          </div>
          <Button style={styles.signInBtn}
            onClick={googleSignIn}
            bgColor="#1E88E5"
            fgColor="#fff"
          >
            <img src="/assets/images/google-icon.svg" alt=""
              style={{...styles.btnIcon, backgroundColor: '#fff'}}
            />
            Sign In With Google
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container:{
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    background: '#eee',
    zIndex: '100',
  },
  formContainer: {
    position: 'relative',
    width: '400px',
    maxWidth: '100%',
    margin: '10vh auto',
    overflow: 'hidden',
    paddingBottom: '10vh',
    background: '#fff',
    //boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    //borderRadius: '4px',
  },

  titleContainer:{
    padding: 30,
    textAlign: 'center',
  },

  title:{
    fontSize: '2em',
  },
  signInBtn: {
    position: 'relative',
    display: 'block',
    width: '90%',
    margin: 'auto',
    height: 65,
    lineHeight: '65px',
    padding: '0 0 0 8px',
    color: '#fff',
    borderRadius: '4px',
  },

  btnIcon: {
    position:'absolute',
    top: '5px', 
    left: '7px',
    width: 52,
    padding: 10,
    borderRadius: '4px',
  },

  loginForm: {
    width: '100%',
  },
  closeBtn:{
    position: 'absolute',
    fontSize: '1.4em',
    cursor: 'pointer',
    right: 10,
    top: 10,
  },
};



export default Login;
