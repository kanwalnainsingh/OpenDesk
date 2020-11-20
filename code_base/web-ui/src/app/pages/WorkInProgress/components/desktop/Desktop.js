import React from "react";
// import Nav from "./Nav";
import Middle from "./Middle";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import { toAbsoluteUrl } from "../../../../utils/utils";

export default function Desktop() {
  return (
    <Grid container display="flex" wrap="nowrap">
      <img
        src={toAbsoluteUrl("/media/wip/vertical-logo.png")}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          width: "11rem",
        }}
        alt=""
      />
      <Middle />
      <Grid container display="flex" direction="column">
        <AboutUs />
        <Footer />
      </Grid>
    </Grid>
  );
}
