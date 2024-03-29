import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './userReducer';
import profile from './profileReducer';


export default combineReducers({
  user,
  profile,
  routing: routerReducer
});


