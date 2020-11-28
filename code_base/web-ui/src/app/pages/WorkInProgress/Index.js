import React from "react";
import Nav from "./components/Nav";
import Middle from "./components/Middle";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { toAbsoluteUrl } from "../../utils/utils";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 100,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const WorkInProgress = () => {
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumBreakPoint = useMediaQuery(theme.breakpoints.between("md", "lg"));
  return (
    <>
      <ThemeProvider theme={theme}>
        {mobileBreakPoint ? (
          <>
            <Nav />
            <Middle mobileBreakPoint={mobileBreakPoint} />
            <AboutUs />
            <Footer />
          </>
        ) : (
          <Grid container display="flex" wrap="nowrap">
            <img
              src={toAbsoluteUrl("/media/wip/vertical_logo.svg")}
              style={{
                position: "absolute",
                margin: "auto",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0, 
                textAlign: "center",
                height: "auto",
                width: mediumBreakPoint ? "13rem" : "19rem",
              }}
              alt=""
            />
            <Middle mobileBreakPoint={mobileBreakPoint} />
            <Grid container display="flex" direction="column">
              <AboutUs />
              <Footer />
            </Grid>
          </Grid>
        )}
      </ThemeProvider>
    </>
  );
};
