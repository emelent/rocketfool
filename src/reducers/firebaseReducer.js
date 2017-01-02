import {types} from '../actions/firebaseActions';
import {hashHistory} from 'react-router';

const initialState = {
    loggedIn: false,
    logInPending: false,
    logOutPending: false,
    name: null,
    email: null,
    uid: null,
    businessProfile: null,
    errorMessage: null,
};


export default function(state=initialState, action){
  switch (action.type) {
    case types.LOG_IN_PENDING:
      return {
        ...state,
        logInPending: true,
      };
    case types.LOG_IN_FULFILLED:
      let user = action.payload.user;
      console.log('LOGGED IN => ', user);
      hashHistory.push('/browse');
      
      return {
        ...state,
        logInPending: false,
        logIn: true,
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      };
    case types.LOG_IN_REJECTED:
      console.log(action.payload.message);
      return {
        ...state,
        logInPending: false,
        logIn: false,
        errorMessage: action.payload.message,
      };


    case types.LOG_OUT_PENDING:
      return {
        ...state,
        logOutPending: true,
      };
    case types.LOG_OUT_FULFILLED:
      return {
        ...initialState,
      };
    case types.LOG_IN_REJECTED:
      return {
        ...state,
        logOutPending: false,
      };
  }

  return state;
}
