import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

import {initialState as user} from './reducers/userReducer';
import {initialState as profile} from './reducers/profileReducer';


const initialState = {
  user,
  profile,
};

const enhancer = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, initialState, enhancer);

