import React from 'react';
import './App.css';
import OrganisationHeader from "./components/organisation_onborading/organisationHeader/OrganisationHeader";
import OrganisationBase from "./components/organisation_onborading/organisationBase/OrganisationBase";
import OrganisationFooter from "./components/organisation_onborading/organisationFooter/OrganisationFooter";

function App() {
  return (
    <div className="App">
       <OrganisationHeader/>
       <OrganisationBase/>
       <OrganisationFooter/>
    </div>
  );
}

export default App;
