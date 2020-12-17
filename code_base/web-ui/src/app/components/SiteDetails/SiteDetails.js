import React from "react";

import Paper from "@material-ui/core/Paper";

import Aux from "../../HOC/Auxiliary";
import "./SiteDetails.css";
import SiteCard from "./Card";

const siteDetails = (props) => {
  return (
    <Aux>
      <SiteCard site={props} />
    </Aux>
  );
};

export default siteDetails;
