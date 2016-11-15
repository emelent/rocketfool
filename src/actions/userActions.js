import axios from 'axios';

const api = 'http://rest.learncode.academy/api';
export function fetchUsers(){
  return (dispatch) =>{
    dispatch({type: 'FETCH_USERS_PENDING'});
    axios.get(`${api}/wstern/users`)
      .then((response) => {
        dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_USERS_REJECTED', payload: err})  
      });
  }
}

export function fetchUser(name){
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {
      name
    }
  };
}
