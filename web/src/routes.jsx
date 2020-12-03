/* eslint-disable no-undef */
import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import Todo from './pages/Todo';
import About from './pages/About';

function Routes() {
  return (
    <HashRouter>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos" />
    </HashRouter>
  );
}

export default Routes;
