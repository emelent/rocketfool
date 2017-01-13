import firebase from '../firebase';
import types from '../types';


export function fetchProfiles(){
  let ref = firebase.database().ref('profiles');
  return dispatch => {
    dispatch({type: types.FETCH_PROFILES_PENDING});

    ref.on(
      'value', 

      snapshot => {
        dispatch({
          type: types.FETCH_PROFILES_FULFILLED, 
          payload: snapshot.val()
        });
      },

      error => {
        dispatch({
          type: types.FETCH_PROFILES_REJECTED, 
          payload: error,
        });
      }
    );
  }
}


export function createProfile(){
}

export function deleteProfile(profileId){
}


