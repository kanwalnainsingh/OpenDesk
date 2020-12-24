import React from "react";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import history from '../history';
import AddSite from '../app/container/AddSite/AddSite'
import HomeRouter from "./HomeRouter"
import WIPRouter from "./WIPRouter"
import Sites from '../app/container/Sites/Sites'
import Index from '../app/pages/EmployeeMenu/Index'
import EmployeesPage from "../app/pages/OrganisationMenu/EmployeesPage";
import NewSite from '../app/pages/NewSite/NewSite'
import EmployeesPageMobile from "../app/pages/OrganisationMenu/EmployeesPageMobile";
import SitePage from "../app/pages/OrganisationMenu/SitePage";
import EmployeeBooking from "../app/pages/EmployeeBooking/EmployeeBooking";
export const Routes = () => {
  return (
    <Router history={history}>
    <Switch>
      {
        /* Redirect from root URL to /quick-start. */
        <Redirect exact from="/" to="/wip" />
      }
      <Route path="/home" component={HomeRouter} />
      <Route path="/organisationFirst" component={AddSite} />
      <Route path="/organisation" component={SitePage} />
      <Route path="/invitationDesktop" component={EmployeesPage} />
      <Route path="/invitationMobile" component={EmployeesPageMobile} />

      <Route path="/wip" component={WIPRouter} />
      <Route path="/newsite" component={NewSite}/>
      <Route path="/sites/:id" component={Sites}/>
      <Route exact path="/employee" component={Index} />
      <Route exact path="/employeebooking" component={EmployeeBooking} />
    </Switch>
    </Router>
  );
};
