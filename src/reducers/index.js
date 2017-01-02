import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './firebaseReducer';

export default combineReducers({
  user,
  routing: routerReducer
});


