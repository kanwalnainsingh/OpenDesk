import React, { Component } from 'react';
import './App.css';
// import OrganisationHeader from "./components/organisation_onborading/organisationHeader/OrganisationHeader";
// import OrganisationBase from "./components/organisation_onborading/organisationBase/OrganisationBase";
// import OrganisationFooter from "./components/organisation_onborading/organisationFooter/OrganisationFooter";

import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout'
import SetupBuilder from './container/SetupBuilder/SetupBuilder'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //    <OrganisationHeader/>
      //    <OrganisationBase/>
      //    <OrganisationFooter/>
      // </div>
      <BrowserRouter>
        <Layout />
        <SetupBuilder />
      </BrowserRouter>
    );
  }
}

export default App;
