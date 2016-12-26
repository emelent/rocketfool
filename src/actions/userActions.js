import axios from 'axios';

const api = 'http://rest.learncode.academy/api';
export function fetchUsers(){
  return (dispatch) =>{
    dispatch({type: 'FETCH_USERS_PENDING'});
    let users = window.localStorage.getItem('users');
    if(!users){
      axios.get(`${api}/wstern/users`)
        .then((response) => {
          window.localStorage.setItem('users', JSON.stringify(response.data));
          dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data});
        })
        .catch((err) => {
          dispatch({type: 'FETCH_USERS_REJECTED', payload: err})  
        });
    }else{
      dispatch({type: 'FETCH_USERS_FULFILLED', payload: JSON.parse(users)});
    }
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
