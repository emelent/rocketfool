import firebase from '../firebase';
import {hashHistory} from 'react-router';

export const types = {
  LOG_IN_FULFILLED: 'LOG_IN_SUCCESSFUL',
  LOG_IN_REJECTED: 'LOG_IN_REJECTED',
  LOG_IN_PENDING: 'LOG_IN_PENDING',

  CHECK_LOGIN: 'CHECK_LOGIN',

  LOG_OUT_FULFILLED: 'LOG_OUT_SUCCESSFUL',
  LOG_OUT_REJECTED: 'LOG_OUT_REJECTED',
  LOG_OUT_PENDING: 'LOG_OUT_PENDING',
};

export function startListeningForAuth(){
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({type: types.LOG_IN_FULFILLED,
          payload: user
        });
      } else {

        dispatch({type: types.LOG_IN_REJECTED});
      }
    });
  };
};

export function checkLogin(){
  return (dispatch) => {
    dispatch({type: types.CHECK_LOGIN});
  };
}

export function googleSignIn(){
  return (dispatch) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) =>{
      hashHistory.push('/browse');
      dispatch({type: types.LOG_IN_FULFILLED, payload: result});
    }).catch((error) => {
      dispatch({type: types.LOG_IN_REJECTED, payload: error});
    });

    dispatch({type: types.LOG_IN_PENDING});
  }
}
