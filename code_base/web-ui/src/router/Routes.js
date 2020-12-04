import React from "react";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import history from '../history';
import AddSite from '../app/container/AddSite/AddSite'
import HomeRouter from "./HomeRouter"
import WIPRouter from "./WIPRouter"
import Sites from '../app/container/Sites/Sites'

export const Routes = () => {
  
  return (
    <Router history={history}>
    <Switch>
      {
        /* Redirect from root URL to /quick-start. */
        <Redirect exact from="/" to="/wip" />
      }
      <Route path="/home" component={HomeRouter} />
      <Route path="/organisation" component={AddSite} />
      <Route path="/wip" component={WIPRouter} />
      <Route path="/sites/:id" component={Sites}/>
    </Switch>
    </Router>
  );
};
