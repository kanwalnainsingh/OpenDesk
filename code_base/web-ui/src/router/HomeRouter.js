import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../app/pages/Home/Index"

export default function HomeRouter() {
  return (
    <Switch>
        <Route path="/home" component={ Home } />
    </Switch>
  );
}
