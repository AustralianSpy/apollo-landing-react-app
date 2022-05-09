import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';

/*
    Wrapper for layout of app, setting up future routing capabilities.
*/

export default function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  )
}