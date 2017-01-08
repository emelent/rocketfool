import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';


const initialState = {
  user: {
    loggedIn: false,
    logInPending: false,
    logOutPending: false,
    name: null,
    email: null,
    uid: null,
    businessProfile: null,
    errorMessage: null,
  }
};

const enhancer = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, initialState, enhancer);

