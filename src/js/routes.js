import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import App from './app';
import TableView from './components/ViewComponents/TableView';

export default () => (
  <Router>
  <div>
      <Route exact path='/' component = {App} />
      <Route exact path='/TableView' component ={TableView} />

  </div>
  </Router>
);
