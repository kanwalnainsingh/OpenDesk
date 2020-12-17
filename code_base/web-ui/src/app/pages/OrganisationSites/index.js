import { createMuiTheme, makeStyles } from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "styled-components";
import SiteCard from "./components/Card";
import NavBar from "./components/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#263238",
    height: "100vh",
    minHeight: "100vh",
  },
}));

export default function OrganisationSites() {
  const classes = useStyles();
  const data = [
    {
      title: "Title example",
      floors: 1,
      desks: 841,
      location: "Location example",
    },
    {
      title: "Title example",
      floors: 2,
      desks: 841,
      location: "Location example",
    },
    {
      title: "Title example",
      floors: 3,
      desks: 841,
      location: "Location example",
    },
  ];

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#407BFF",
      },
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
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <NavBar />
        {data.map((site, i) => {
          return <SiteCard key={i} site={site} />;
        })}
      </div>
    </ThemeProvider>
  );
}
