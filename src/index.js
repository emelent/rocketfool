import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
 
import store from './store';
import Main from './layouts/Main';

// Create an enhanced history that syncs navigation events with the store 
const history = syncHistoryWithStore(hashHistory, store);
 
ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Main}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
