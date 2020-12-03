import React from "react";
import { Route, Switch } from "react-router-dom";
import { WorkInProgress } from "../app/pages/WorkInProgress/Index"

export default function WIPRouter() {
  return (
    <Switch>
        <Route path="/wip" component={ WorkInProgress } />
    </Switch>
  );
}
