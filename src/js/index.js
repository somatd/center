import React from 'react';
import {Provider} from 'react-redux';
import { ReactDOM,render } from 'react-dom';
import Routes from './routes';
import {loadHistory} from './actions/historyAction';
import configureStore from  './store/configureStore';

const  store = configureStore();
store.dispatch(loadHistory());

render((
  <Provider store = {store} >
    <Routes />
  </Provider>),
  document.getElementById('app')
);
