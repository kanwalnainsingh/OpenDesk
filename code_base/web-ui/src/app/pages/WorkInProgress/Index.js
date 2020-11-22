import React from "react";
import Nav from "./components/Nav";
import Middle from "./components/Middle";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { toAbsoluteUrl } from "../../utils/utils";

export const WorkInProgress = () => {
  const theme = useTheme();
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumBreakPoint = useMediaQuery(theme.breakpoints.between("md", "lg"));
  return (
    <>
      {mobileBreakPoint ? (
        <>
          <Nav />
          <Middle />
          <AboutUs />
          <Footer />
        </>
      ) : (
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
              width: mediumBreakPoint ? "13rem" : "19rem"
            }}
            alt=""
          />
          <Middle mobileBreakPoint={mobileBreakPoint}/>
          <Grid container display="flex" direction="column">
            <AboutUs />
            <Footer />
          </Grid>
        </Grid>
      )}
    </>
  );
};
