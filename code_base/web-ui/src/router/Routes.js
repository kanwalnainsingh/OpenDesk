import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SetupBuilder from '../app/container/SetupBuilder/SetupBuilder'
import AddSite from '../app/container/AddSite/AddSite'
import HomeRouter from "./HomeRouter"
import WIPRouter from "./WIPRouter"

export const Routes = () => {
  
  return (
    <Switch>
      {
        /* Redirect from root URL to /quick-start. */
        <Redirect exact from="/" to="/wip" />
      }
      <Route path="/home" component={HomeRouter} />
      <Route path="/organization" component={AddSite} />
      <Route path="/tesOrganisation" component={SetupBuilder} />
      <Route path="/wip" component={WIPRouter} />
    </Switch>
  );
};
