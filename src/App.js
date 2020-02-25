import React from 'react';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";

import DefaultLayout from '../src/layout/DefaultLayout';

const hist = createBrowserHistory();
const app = () =>  {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={DefaultLayout}/>
      </Switch>
    </Router>
  );
}

export default app;
