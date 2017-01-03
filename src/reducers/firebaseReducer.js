import {types} from '../actions/firebaseActions';

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
  let user;
  switch (action.type) {
    case types.LOG_IN_PENDING:
      return {
        ...state,
        logInPending: true,
      };
    case types.LOG_IN_FULFILLED:
      user = action.payload.user;
      console.log('LOGGED IN => ', user);
      window.localStorage.setItem('user', JSON.stringify(user));
      
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
      window.localStorage.clear();
      return {
        ...initialState,
      };
    case types.LOG_IN_REJECTED:
      return {
        ...state,
        logOutPending: false,
      };

    case types.CHECK_LOGIN:
      user = JSON.parse(window.localStorage.getItem('user'));
      if(user){
        return {
          ...initialState,
          logIn: true,
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        }
      }
    
  }

  return state;
}
