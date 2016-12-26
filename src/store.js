import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';


const initialState = {
  user: {
    fetching: false,
    fetched: false,
    user: {
      id: null,
      name: null, 
      age: null
    },
    users: [
      {id: 1, name: 'Bob', age: 32},
      {id: 2, name: 'Barker', age: 43},
    ],
    error: null
  }
};

const enhancer = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, initialState, enhancer);

